const path = require('path');
const { readTextFile } = require('../fileReader');

describe('readTextFile', () => {

  test('should read a text file and return its content', async () => {

    const filePath = path.join(__dirname, '../data.txt');

    const content = await readTextFile(filePath);
    expect(content).toBeDefined();
    expect(typeof content).toBe('string');
    expect(content).toContain('Olá, Axel!');
    expect(content).toBe('Olá, Axel!');

  });

  test('should throw an error if the file does not exist', async () => {
    const filePath = path.join(__dirname, 'nonExistentFile.txt');
    await expect(readTextFile(filePath)).rejects.toThrow();
  });

});
