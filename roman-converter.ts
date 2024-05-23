export abstract class RomanNumberConverter {
    static map = new Map<number, string>([
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    static convert(number: number): string {
        if (number >= 9) {
            return this.map.get(9) + this.convert(number - 9);
        }
        if (number >= 5) {
            return this.map.get(5) + this.convert(number - 5);
        }
        if (number >= 4) {
            return this.map.get(4) + this.convert(number - 4)
        }
        if (number >= 1) {
            return this.map.get(1) + this.convert(number - 1);
        }
        return '';
    }
}
