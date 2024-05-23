export abstract class RomanNumberConverter {
    static convert(number: number): string {
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
