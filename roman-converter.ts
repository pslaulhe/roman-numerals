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
        [40, 'XL'],
        [50, 'L'],
        [90, 'XC'],
        [100, 'C'],
        [400, 'CD'],
        [500, 'D'],
        [900, 'CM']
    ]);

    static convert(number: number) {
        return this.breakdown(number).map(x => this.arabicToRomanSymbolMap.get(x)).join('');
    }

    static breakdown(numberToBreakdown: number): number[] {
        const max = this.breakdownMaxSymbolValue(numberToBreakdown, Array.from(this.arabicToRomanSymbolMap.keys()));

        if (max === 0) return [];
        else return [max, ...this.breakdown(numberToBreakdown - max)];
    }

    static breakdownMaxSymbolValue(numberToTest: number, listOfArabicNumbers: number[]) {
        const validCandidates = listOfArabicNumbers.filter(n => n <= numberToTest);

        if (validCandidates.length === 0) return 0;
        else return Math.max(...validCandidates);
    }
}
