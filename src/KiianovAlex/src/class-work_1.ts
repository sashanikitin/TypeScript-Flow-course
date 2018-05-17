/**
 * Function which takes an array and rest parameters to check
 * if every argument except the first one is included into an array
 * @param {Array<number | string>} arr
 * @param {number | string} args
 * @returns {boolean}
 */
const isInArray = (arr: Array<number | string>, ...args: Array<number | string>): boolean => {
    const first = args.shift();
    if (arr.length < 1 || typeof first === "undefined" || arr.includes(first)) {
        return false;
    }
    return args.every((arg) => {
        return arr.includes(arg);
    });
};
/*
console.log(isInArray([], 1, 2, 3, 5)); // false
console.log(isInArray([1, 2], 1, 2, 3, 5)); // false
console.log(isInArray([1, 2, 3, 5], 0, 2, 3, 5)); // true
console.log(isInArray([-2, -3], -2, -3)); // false
console.log(isInArray(["1" , "2"], "0", "1", "2")); // true
*/

const summator = (...args: Array<number | string>): number => {
    const r = args.reduce((previousValue: number | string, currentValue: number | string): number => {
        const prev = (typeof previousValue === "string") ? parseInt(previousValue, 10) : previousValue;
        const curr = typeof currentValue === "string" ? parseInt(currentValue, 10) : currentValue;
        return prev + curr;
    } );
    return (typeof r === "string") ? parseInt(r, 10) : r;
};
/*
console.log(summator(1, 2)); // 3
console.log(summator("3", 4)); // 7
console.log(summator(5, "6")); // 11
*/

const getUnique = (...args: Array<number | string>): Array<number | string> => {
    const arr: Array<number | string> = [];
    args.forEach((arg) => {
        if (!arr.includes(arg)) {
            arr.push(arg);
        }
    });
    return arr;
};
/*
console.log(getUnique(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(getUnique(1, 2, 2, 3, 4)); // [1, 2, 3, 4]
console.log(getUnique(3, 1, 2, 1, 2, 4)); // [3, 1, 2, 4]
*/

const revertSentence = (str: string): string => {
    let result: string = "";
    const words: string[] = str.split(" ");
    console.log(words);
    words.forEach((word) => {
        let wordInProgress: string = "";
        for (let i = 0; i < word.length; i++) {
            if (/d/g.test(word[i])) {

                wordInProgress = wordInProgress + word[i];
           } else {
                wordInProgress = word[i] + wordInProgress;
           }
        }
        result = result + wordInProgress;
    });

    return result;
};

console.log(revertSentence("s1tar3t 2 hellow")); // t1rat3s 2 wolleh
console.log(revertSentence("s1ta$%r3t 2 hel^low")); // t1ra$%t3s 2 wol^leh
console.log(revertSentence("s1tar3t 2   low5")); // t1rat3s 2   wol5
