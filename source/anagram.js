'use strict';


/**
 * Find anagram in input word list
 * @param {string[]} input - list of words
 * @returns {null|string[][]} - list of anagrams
 */
const anagram = (input) => {
    if (!(Array.isArray(input) && input.every((item) => typeof item === 'string'))) {
        return null;
    }
    const sortedInput = input.slice().sort();
    const output = [];

    const normalizedWordsList = sortedInput.map((word) =>
        word.split('').sort().join(''));

    const normalizedWordsMap = new Map();
    normalizedWordsList.forEach((word, idx) => {
        if (!normalizedWordsMap.has(word)) {
            normalizedWordsMap.set(word, []);
        }
        normalizedWordsMap.get(word).push(sortedInput[idx]);
    });

    normalizedWordsMap.forEach((value) => {
        if(value.length > 1) {
            output.push(value);
        }
    });

    return output;
}
