const { soma } = require('../math');

describe('soma', () => {
  test('soma de 1 + 2 deve ser 3', () => {
    expect(soma(1, 2)).toBe(3);
  });
});