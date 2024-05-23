export abstract class RomanNumberConverter {
    static map = new Map<number, string>([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
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
