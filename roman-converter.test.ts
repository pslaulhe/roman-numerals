import {RomanNumberConverter} from "./roman-converter";

describe('RomanConverter', () => {
    it('should convert 1 to I', () => {
        const romanSymbol = RomanNumberConverter.convert(1);
        expect(romanSymbol).toBe('I');
    });

    it ('should convert 4 to IV', () => {
       expect(RomanNumberConverter.convert(4)).toBe('IV');
    });

    it ('should convert 5 to V', () => {
        expect(RomanNumberConverter.convert(5)).toBe('V');
    });
});
