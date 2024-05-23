export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number >= 9) {
            return 'IX';
        }
        if (number >= 8) {
            return 'VIII';
        }
        if (number >= 7) {
            return 'VII';
        }
        if (number >= 6) {
            return 'VI';
        }
        if (number >= 5) {
            return 'V';
        }
        if (number === 4) {
            return 'IV';
        }
        if (number >= 1) {
            return 'I' + this.convert(number - 1);
        }
        return '';
    }
}
