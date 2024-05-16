export abstract class RomanNumberConverter {
    private static arabicToRomanSymbolMap: Map<number, string> = new Map([
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],
    ]);

    static convert(number: number) {
        return this.arabicToRomanSymbolMap.get(number);
    }
}
