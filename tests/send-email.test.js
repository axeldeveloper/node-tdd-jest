
jest.mock('../sendEmail'); // transforma a função em um mock automaticamente

const sendEmail = require('../sendEmail');

const emailService = require('../service/mailService');

describe('sendEmail', () => {

    test('verifica se a função foi chamada corretamente', () => {

      const mockSend = jest.fn(); // mas não testa função real

      mockSend('axel@gmail.com', 'Olá!');

      expect(mockSend).toHaveBeenCalled();

      expect(mockSend).toHaveBeenCalledWith('axel@gmail.com', 'Olá!');

    });

    test('verifica se sendEmail foi chamado com os parâmetros corretos', () => {
      sendEmail('axel@gmail.com', 'Olá!');
      expect(sendEmail).toHaveBeenCalled();
      expect(sendEmail).toHaveBeenCalledWith('axel@gmail.com', 'Olá!');
    });

    test('espiona sendEmail e verifica chamada', () => {
      const spy = jest.spyOn(emailService, 'sendEmail').mockImplementation(() => {});

      emailService.sendEmail('axel@gmail.com', 'Olá!');

      expect(spy).toHaveBeenCalledWith('axel@gmail.com', 'Olá!');
      spy.mockRestore(); // opcional
    });

    test('simula leitura de arquivo', () => {
      const fs = require('fs');
      jest.mock('fs');
      fs.readFileSync.mockReturnValue('conteúdo falso');

      const content = fs.readFileSync('fake.txt');
      expect(content).toBe('conteúdo falso');
    });
});