import * as vscode from 'vscode';
import { BACKGROUND_COLOR_MAP, BORDER_COLOR_MAP, BORDER_RADIUS_VARIABLE, BOX_SHADOW_VARIABLE, COLOR_MAP, FONT_SIZE_VARIABLE, FONT_WEIGHT_VARIABLE, FUNCTION_COLOR_MAP, GRAY_MAP } from './variable';
export class SCSSCompleteProvider implements vscode.CompletionItemProvider {
  private descriptor: Partial<vscode.CompletionItem> = {};
  // 模式： 替换 ｜ 补全
  private mode: 'completion' | 'replace' = 'completion';
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    // 获取当前这一行
    const line = document.lineAt(position);
    // 去掉$触发符 当前这一行的文本
    const lineText = line.text.replace('$', '');
    // 属性
    const property = lineText.split(':')[0]?.trim();
    // 距离当前光标最近的属性值,即有$的那一项（复合属性，可以连着写）（如果有多个$,那么只取第一个）
    let lastPropertyValue = line.text.split(' ').find(str => str.includes('$'))?.replace(/[;$]/g, '').trim() || '';
    let completionItems = [];
    if(line.lineNumber === 0) {
      completionItems = ['@use \'~@qingflow/qing-design/style\'; = use'];
      this.descriptor.kind = vscode.CompletionItemKind.Module;
      this.descriptor.detail = '引入scss module';
      this.mode = 'completion';
    } else {
      completionItems = this.handleCompletionItems(property, lastPropertyValue);
    }
    // 定义提示补全列表
    const options = completionItems.map(item => {
      const variable = item.split(' = ')[0];
      // : 之前的是变量值，: 之后的是颜色值
      const value = item.split(' = ')[1].split(':')[0];
      const color = item.split(' = ')[1].split(':')[1];
      const option = new vscode.CompletionItem(value);
      option.filterText = '$';
      option.kind = this.descriptor.kind;
      option.insertText = this.descriptor.insertText || variable;
      option.detail = this.descriptor.detail;
      if (this.mode === 'replace') {
        const markdown =  new vscode.MarkdownString(
          `<span style=\"color:${color};\">■ </span>
           <span>${value}</span>
          `
        );
        markdown.supportHtml = true;
        option.documentation = markdown;
        let replaceText = lineText.replace(lastPropertyValue, variable);
        option.command = { command: 'replace color variable', title: '', arguments: [line.lineNumber, replaceText]};
      }
      return option;
    });
    return options;
  }

  resolveCompletionItem(item: vscode.CompletionItem): vscode.CompletionItem{
    return item;
  }

  /**
   * 处理补全建议
   * 1. 根据css的属性去补全
   * 2. 根据属性值，一种是完整的颜色代码，例如：#DCECFE。另一种是模糊文本匹配 例如：red
   * @param property css的属性
   * @param cursor 距离光标最近的一个属性值
   */
  handleCompletionItems(property: string, lastPropertyValue: string): string[] {
    let completionItems: string[] = [];
    /** length=0 说明直接按下$进行触发 */
    if (lastPropertyValue.length === 0) {
      //#region 字体大小
      if (/^font-size$/.test(property)) {
        completionItems = FONT_SIZE_VARIABLE;
        this.descriptor.detail = '字体大小';
      }
      // 字重
      if (/^font-weight$/.test(property)) {
        completionItems = FONT_WEIGHT_VARIABLE;
        this.descriptor.detail = '字重';
      }
      // 盒子阴影
      if (/^box-shadow$/.test(property)) {
        completionItems = BOX_SHADOW_VARIABLE;
        this.descriptor.detail = '阴影';
      }
      // 盒子圆角
      if (/^border-radius$/.test(property)) {
        completionItems = BORDER_RADIUS_VARIABLE;
        this.descriptor.detail = '圆角';
      }
      this.descriptor.kind = vscode.CompletionItemKind.Variable;
      this.descriptor.insertText = undefined;
      this.mode = 'completion';
      //#endregion
    } else {
      const isHexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(lastPropertyValue);
      // 说明是颜色值 那么可以直接通过$触发
      if (isHexColor) {
        const COLOR_VARIABLE1 = COLOR_MAP.get(lastPropertyValue.toUpperCase());
        const COLOR_VARIABLE2 = GRAY_MAP.get(lastPropertyValue.toUpperCase());
        const COLOR_VARIABLE3 = BACKGROUND_COLOR_MAP.get(lastPropertyValue.toUpperCase());
        const COLOR_VARIABLE4 = BORDER_COLOR_MAP.get(lastPropertyValue.toUpperCase());
        const COLOR_VARIABLE5 = FUNCTION_COLOR_MAP.get(lastPropertyValue.toUpperCase());
        [COLOR_VARIABLE1, COLOR_VARIABLE2, COLOR_VARIABLE3, COLOR_VARIABLE4, COLOR_VARIABLE5].forEach(variable => {
          if (variable) {
            completionItems.push(variable);
          }
        });
      } else {
        // 不是颜色值，则对该属性值进行模糊匹配
        const COLOR_VARIABLE_LIST1 = [...COLOR_MAP.values()];
        const COLOR_VARIABLE_LIST2 = [...GRAY_MAP.values()];
        const COLOR_VARIABLE_LIST3 = [...BACKGROUND_COLOR_MAP.values()];
        const COLOR_VARIABLE_LIST4 = [...BORDER_COLOR_MAP.values()];
        const COLOR_VARIABLE_LIST5 = [...FUNCTION_COLOR_MAP.values()];
        [COLOR_VARIABLE_LIST1, COLOR_VARIABLE_LIST2, COLOR_VARIABLE_LIST3, COLOR_VARIABLE_LIST4, COLOR_VARIABLE_LIST5].forEach(list => {
          completionItems.push(...list.filter(str => {
            const reg = new RegExp(lastPropertyValue, 'i');
            return reg.test(str);
          }));
        });
      }
      this.descriptor.insertText = '';
      this.descriptor.kind = vscode.CompletionItemKind.Color;
      this.descriptor.detail = '颜色';
      this.mode = 'replace';
      // #endregion
    }
    return completionItems;
  }
}
