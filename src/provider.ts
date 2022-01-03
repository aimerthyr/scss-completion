import * as vscode from 'vscode';
import { BACKGROUND_COLOR_VARIABLE, BORDER_COLOR_VARIABLE, BORDER_RADIUS_VARIABLE, BOX_SHADOW_VARIABLE, COLOR_MAP, FONT_SIZE_VARIABLE, FONT_WEIGHT_VARIABLE, GRAY_MAP } from './variable';
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
    // 去掉$触发符
    const lineText = line.text.replace('$', '');
    const property = lineText.split(':')[0]?.trim();
    const propertyValue = lineText.split(':')[1]?.trim().replace(';', '');
    let completionItems = [];
    if(line.lineNumber === 0) {
      completionItems = ['@use \'~@qingflow/qing-design/style\'; = use'];
      this.descriptor.kind = vscode.CompletionItemKind.Module;
      this.descriptor.detail = '引入scss module';
      this.mode = 'completion';
    } else {
      completionItems = this.handleCompletionItems(property, propertyValue);
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
      option.detail = this.descriptor.detail || '颜色';
      if (this.mode === 'replace') {
        const markdown =  new vscode.MarkdownString(
          `<span style=\"color:${color};\">■ </span>
           <span>${value}</span>
          `
        );
        markdown.supportHtml = true;
        option.documentation = markdown;
        let replaceText = lineText.replace(propertyValue, variable);
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
   * @param property css的属性值
   */
  handleCompletionItems(property: string, propertyValue: string): string[] {
    let completionItems: string[] = [];
    /**
     * 如果没有输入或者是border background 那么就直接走补全
     * 不能单用一个长度去判断 是因为border: 1px solid #ccc 这种是复合写法
     * */
    if (propertyValue.length === 0 || property.includes('border') || property.includes('background')) {
      //#region 字体大小
      if (/^font-size$/.test(property)) {
        completionItems = FONT_SIZE_VARIABLE;
        this.descriptor.detail = '字体大小';
        this.descriptor.kind = vscode.CompletionItemKind.Variable;
      }
      // 字重
      if (/^font-weight$/.test(property)) {
        completionItems = FONT_WEIGHT_VARIABLE;
        this.descriptor.detail = '字重';
        this.descriptor.kind = vscode.CompletionItemKind.Variable;
      }
      // 盒子阴影
      if (/^box-shadow$/.test(property)) {
        completionItems = BOX_SHADOW_VARIABLE;
        this.descriptor.detail = '阴影';
        this.descriptor.kind = vscode.CompletionItemKind.Variable;
      }
      // 盒子圆角
      if (/^border-radius$/.test(property)) {
        completionItems = BORDER_RADIUS_VARIABLE;
        this.descriptor.detail = '圆角';
        this.descriptor.kind = vscode.CompletionItemKind.Variable;
      }
      // 背景色
      if (/\bbackground/.test(property)) {
        completionItems = BACKGROUND_COLOR_VARIABLE;
        this.descriptor.detail = '背景色';
        this.descriptor.kind = vscode.CompletionItemKind.Color;
      }
      // 边框色
      if (/\bborder(?!(-radius))/.test(property)) {
        completionItems = BORDER_COLOR_VARIABLE;
        this.descriptor.detail = '边框颜色';
        this.descriptor.kind = vscode.CompletionItemKind.Color;
      }
      this.mode = 'completion';
      //#endregion
    } else {
      // #region 如果是直接输入颜色值 #DCECFE $触发
      const COLOR_VARIABLE = COLOR_MAP.get(propertyValue.toUpperCase());
      if (COLOR_VARIABLE) {
        completionItems = [COLOR_VARIABLE];
      } else {
        // 对颜色进行模糊匹配
        const COLOR_VARIABLE_LIST1 = [...COLOR_MAP.values()];
        const COLOR_VARIABLE_LIST2 = [...GRAY_MAP.values()];
        completionItems = COLOR_VARIABLE_LIST1.filter(str => {
          const reg = new RegExp(propertyValue, 'i');
          return reg.test(str);
        });
        completionItems.push(...COLOR_VARIABLE_LIST2.filter(str => {
          const reg = new RegExp(propertyValue, 'i');
          return reg.test(str);
        }));
      }
      this.descriptor.insertText = '';
      this.descriptor.kind = vscode.CompletionItemKind.Color;
      this.mode = 'replace';
      // #endregion
    }
    return completionItems;
  }
}
