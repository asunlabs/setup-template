/* eslint-disable */
const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');

const _data = fs.readFileSync('./extension.txt').toString().split('\n');

_data.pop();

const _command = 'code --install-extension ';

for (const [index, item] of _data.entries()) {
  const fullLine = _command.concat(item);
  shell.exec(fullLine);
  console.log(chalk.green(`✅ ${index + 1}/${_data.length} ${item} is installed`));
}

console.log('🔨🔨🔨', chalk.bold.blue('DONE'), '🔨🔨🔨');
