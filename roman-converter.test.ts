import {RomanNumberConverter} from "./roman-converter";

describe('RomanConverter', () => {
    it('should convert 1 to I', () => {
        const romanSymbol = RomanNumberConverter.convert(1);

        expect(romanSymbol).toBe('I');
    });
});
