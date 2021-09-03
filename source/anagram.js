'use strict';


/**
 * Find anagram in input word list
 * @param {string[]} input - list of words
 * @returns {string[][]} - list of anagrams
 */
const anagram = (input) => {
    if (!(Array.isArray(input) && input.every((item) => typeof item === 'string'))) {
        throw new TypeError('invalid input');
    }

    const normalizedWordsList = input.map((word) =>
        word.split('').sort().join(''));

    const normalizedWordsMap = new Map();
    normalizedWordsList.forEach((word, idx) => {
        if (!normalizedWordsMap.has(word)) {
            normalizedWordsMap.set(word, []);
        }
        normalizedWordsMap.get(word).push(input[idx]);
    });

    return [...normalizedWordsMap.values()].filter((item) => item.length > 1).map((item) => item.sort()).sort();
}
