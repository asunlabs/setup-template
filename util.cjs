/* eslint-disable */
const findConfig = require('find-config');
const os = require('os');

/**
 *
 * @param {string} target
 */
function getTargetDirectory(target) {
  return findConfig(target);
}

function getFirstTermArg() {
  return process.argv[2];
}

function getCurrentOS() {
  // return 'Linux' or 'Darwin' or 'Windows_NT'
  const currentPlatform = os.type();

  if (currentPlatform === 'Linux') return 'linux';
  if (currentPlatform === 'Darwin') return 'mac';
  if (currentPlatform === 'Windows_NT') return 'windows';
}

console.log(getFirstTermArg());
console.log(getCurrentOS());
console.log(getTargetDirectory('.github'));
