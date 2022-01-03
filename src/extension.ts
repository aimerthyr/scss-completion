import * as vscode from 'vscode';
import { SCSSCompleteProvider } from './provider';

export function activate(ctx: vscode.ExtensionContext) {
	console.log('QingFlow FE ™️ --start');
	const provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'scss' },
		new SCSSCompleteProvider(),
		'$'
	);
	const command = vscode.commands.registerCommand('replace color variable', (line: number, replaceText: string) => {
		vscode.window.activeTextEditor?.edit((editBuilder: vscode.TextEditorEdit) => {
			editBuilder.replace(new vscode.Range(line, 0, line, 10000), replaceText);
      // editBuilder.delete(new vscode.Range(line, 0, line, 10000));
      // editBuilder.insert(new vscode.Position(line, 0), replaceText);
  	});
	});
	ctx.subscriptions.push(provider, command);
}

export function deactivate() {
	console.log('QingFlow FE ™️ --over');
}
