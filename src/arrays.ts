/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else {
        const x = [];
        x.push(numbers[0]);
        x.push(numbers[numbers.length - 1]);
        return x;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const x = numbers.map((y: string): number =>
        parseInt(y) ? parseInt(y) : 0
    );
    return x;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const x = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.substring(1) : amount
    );
    const z = x.map((y: string): number => (parseInt(y) ? parseInt(y) : 0));
    return z;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const x = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    const y = x.map((value: string): string =>
        value.endsWith("!") ? value.toUpperCase() : value
    );
    return y;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const x = words.filter((word: string): boolean => word.length < 4);
    const count = x.reduce((currentCount: number) => currentCount + 1, 0);
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        const x = colors.every(
            (color: string): boolean =>
                color == "red" || color == "blue" || color == "green"
        );
        return x;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentSum: number, value: number) => currentSum + value,
        0
    );
    if (addends.length == 0) {
        return `${sum}=0`;
    } else {
        const x = addends.join("+");
        return `${sum}=${x}`;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const x = values.every((value: number): boolean => value > 0);
    if (x) {
        const y = values.reduce(
            (currentSum: number, value: number) => currentSum + value,
            0
        );
        const z = [...values, y];
        return z;
    } else {
        const y = values.findIndex((value: number): boolean => value < 0);
        const z = values.slice(0, y);
        const a = z.reduce(
            (currentSum: number, value: number) => currentSum + value,
            0
        );
        const b = [...values];
        b.splice(y + 1, 0, a);
        return b;
    }
}
