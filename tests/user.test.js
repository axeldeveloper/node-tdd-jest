// tests/user.test.js

const user = require('../user');

describe('Validação do objeto user', () => {
  test('deve ter o e-mail "axelpatton@gmail.com"', () => {
    expect(user.email).toBe('axelpatton@gmail.com');
  });
});