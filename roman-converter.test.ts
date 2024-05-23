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

    it('should convert 4 to IV', () => {
        expect(RomanNumberConverter.convert(4)).toBe('IV');
    });

    it('should convert 5 to V', () => {
        expect(RomanNumberConverter.convert(5)).toBe('V');
    });

    it('should convert 6 to VI', () => {
        expect(RomanNumberConverter.convert(6)).toBe('VI');
    });

    it('should convert 7 to VII ', () => {
        expect(RomanNumberConverter.convert(7)).toBe('VII');
    });

    it('should convert 8 to VIII', () => {
        expect(RomanNumberConverter.convert(8)).toBe('VIII');
    });

    it('should convert 9 to IX', () => {
        expect(RomanNumberConverter.convert(9)).toBe('IX');
    });
});
