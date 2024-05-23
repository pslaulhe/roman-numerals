export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number === 4) {
            return 'IV';
        }
        if (number === 3) {
            return 'I' + this.convert(number - 1);
        }
        if (number === 2) {
            return 'I' + this.convert(number - 1);
        }
        if (number === 1) {
            return 'I' + this.convert(number - 1);
        }
        return '';
    }
}
