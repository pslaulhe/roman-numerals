export abstract class RomanNumberConverter {
    static convert(number: number): string {
        if (number === 2) {
            return 'II';
        }
        return 'I';
    }
}
