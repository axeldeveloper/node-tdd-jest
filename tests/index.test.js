
const { functionName, toUpperCaseName } = require('../index');

describe("functionName", () => {

  test('test', () => {
      expect(functionName(1)).toBe(false);
    });
});

describe("UpperCaseName", () => {
    test('should convert lowercase name to uppercase', () => {
        expect(toUpperCaseName('joao')).toBe('JOAO');
    });
    test('should convert mixed case name to uppercase', () => {
        expect(toUpperCaseName('Maria')).toBe('MARIA');
    });

    test('should return empty string if input is empty', () => {
        expect(toUpperCaseName('')).toBe('');
    });

    test('should check if result is uppercase', () => {
        const result = toUpperCaseName('ana');
        expect(result).toBe(result.toUpperCase());
    });
});

/*
describe("Name", () => {

        test('should convert lowercase name to uppercase', () => {
            expect(toUpperCaseName('joao')).toBe('JOAO');
        });

        test('should convert mixed case name to uppercase', () => {
            expect(toUpperCaseName('Maria')).toBe('MARIA');
        });



        test('should return the same string if already uppercase', () => {
            expect(toUpperCaseName('CARLOS')).toBe('CARLOS');
        });

        test('should check if result is uppercase', () => {
            const result = toUpperCaseName('ana');
            expect(result).toBe(result.toUpperCase());
        });
    });
*/