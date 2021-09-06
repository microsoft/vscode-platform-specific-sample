const vscode = require('vscode');

async function run() {
  vscode.window.showInformationMessage(`Successfully activated sample platform specific extension for the web.`);
}

function activate(context) {
  let disposable = vscode.commands.registerCommand('vscode-platform-specific-sample.run', run);
  context.subscriptions.push(disposable);
}

module.exports = { activate };
