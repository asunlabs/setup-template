/* eslint-disable */
const shell = require('shelljs');

// run powershell command with shellsjs
const _exampleCommand = 'powershell start "\\"C:\\Program Files\\Docker\\Docker\\Docker Desktop.exe"\\"';
const command = 'powershell echo hello powershell';
shell.exec(command);
