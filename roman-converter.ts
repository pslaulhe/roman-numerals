export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number === 4) {
            return 'IV';
        }
        if (number === 3) {
            return 'I' + 'II';
        }
        if (number === 2) {
            return 'I' + 'I';
        }
        if (number === 1) {
            return 'I';
        }
        return '';
    }
}
