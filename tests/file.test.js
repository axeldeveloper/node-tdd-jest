
jest.mock('../sendEmail'); // transforma a função em um mock automaticamente

 const fs = require('fs');

jest.mock('fs');


describe('sendEmail', () => {


    test('simula leitura de arquivo', () => {
      fs.readFileSync.mockReturnValue('conteúdo falso');

      const content = fs.readFileSync('fake.txt');
      expect(content).toBe('conteúdo falso');
    });


});