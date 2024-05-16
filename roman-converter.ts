export abstract class RomanNumberConverter {
    static convert(number: number) {
        if (number == 1) return 'I';
        if (number == 4) return 'IV';
        if (number == 5) return 'V';
    }
}
