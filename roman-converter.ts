export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number >= 9) {
            return 'IX' + this.convert(number - 9);
        }
        if (number >= 5) {
            return 'V' + this.convert(number - 5);
        }
        if (number >= 4) {
            return 'IV' + this.convert(number - 4)
        }
        if (number >= 1) {
            return 'I' + this.convert(number - 1);
        }
        return '';
    }
}
