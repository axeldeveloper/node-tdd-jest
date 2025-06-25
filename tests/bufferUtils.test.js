const path = require('path');
const { stringToBuffer, readFileAsBuffer } = require('../bufferUtils');

describe('Buffer utils', () => {
  test('stringToBuffer deve converter string em Buffer corretamente', () => {
    const input = 'Axel';
    const buffer = stringToBuffer(input);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.toString('utf-8')).toBe(input);
  });

  test('readFileAsBuffer deve ler conteúdo como Buffer', () => {
    const filePath = path.join(__dirname, '../data.txt');
    const buffer = readFileAsBuffer(filePath);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.toString('utf-8')).toBe('Olá, Axel!');
  });

  test('comparação direta entre buffers deve funcionar', () => {
    const b1 = Buffer.from('Teste');
    const b2 = Buffer.from('Teste');

    expect(b1.equals(b2)).toBe(true);

    expect(Buffer.compare(b1, b2)).toBe(0);
  });
});
