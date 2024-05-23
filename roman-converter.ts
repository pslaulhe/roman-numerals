export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number >= 9) {
            return 'IX';
        }
        if (number >= 8) {
            return 'V' + 'III';
        }
        if (number >= 7) {
            return 'V' +'II';
        }
        if (number >= 6) {
            return 'V' +'I';
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
