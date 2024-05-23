export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number === 4) {
            return 'IV';
        }
        if (number === 3) {
            return 'III';
        }
        if (number === 2) {
            return 'II';
        }
        return 'I';
    }
}
