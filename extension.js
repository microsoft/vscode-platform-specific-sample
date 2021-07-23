const vscode = require('vscode');
const { rgPath } = require('vscode-ripgrep');
const cp = require('child_process');
const { promisify } = require('util');
const execFile = promisify(cp.execFile);

async function run() {
	const { stdout } = await execFile(rgPath, ['--version'], { encoding: 'utf8' });
	vscode.window.showInformationMessage(`Ripgrep version: ${stdout}`);
}

function activate(context) {
	let disposable = vscode.commands.registerCommand('vscode-platform-specific-sample.run', run);
	context.subscriptions.push(disposable);
}

module.exports = { activate };
