const fs = require('fs');
const path = require('path');

/**
 * Converte uma string em um buffer
 */
function stringToBuffer(str) {
  return Buffer.from(str, 'utf-8');
}

/**
 * Lê um arquivo e retorna seu conteúdo como Buffer
 */
function readFileAsBuffer(filePath) {
  const fullPath = path.resolve(filePath);
  return fs.readFileSync(fullPath);
}

module.exports = {
  stringToBuffer,
  readFileAsBuffer,
};