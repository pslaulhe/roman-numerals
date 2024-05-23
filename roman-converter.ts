export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number >= 9) {
            return 'IX';
        }
        if (number >= 8) {
            return 'V' + this.convert(number - 5);
        }
        if (number >= 7) {
            return 'V' + this.convert(number - 5);
        }
        if (number >= 6) {
            return 'V' + this.convert(number - 5);
        }
        if (number >= 5) {
            return 'V' + this.convert(number - 5);
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
