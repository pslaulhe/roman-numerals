import {RomanNumberConverter} from "./roman-converter";

describe('RomanConverter', () => {
    it('should convert 1 to I', () => {
        expect(RomanNumberConverter.convert(1)).toBe('I');
    });

    it('should convert 2 to II', () => {
        expect(RomanNumberConverter.convert(2)).toBe('II');
    });

    it('should convert 3 to III', () => {
        expect(RomanNumberConverter.convert(3)).toBe('III');
    });
});
