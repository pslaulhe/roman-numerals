export abstract class RomanNumberConverter {
    static map = new Map<number, string>([
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    static convert(number: number): string {
        for (let [key, value] of this.map) {
            if (number >= key) {
                return value + this.convert(number - key);
            }
        }

        return '';
    }
}
