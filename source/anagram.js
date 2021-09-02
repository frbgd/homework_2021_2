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

    const normalizedWordsMap = {};
    const normalizedWordsList = sortedInput.map((word) =>
        word.split('').sort().join(''));

    normalizedWordsList.forEach((word, idx) => {
        if (!normalizedWordsMap.hasOwnProperty(word)) {
            normalizedWordsMap[word] = [];
        }
        normalizedWordsMap[word].push(sortedInput[idx]);
    });

    Object.keys(normalizedWordsMap).forEach((word) => {
        if(normalizedWordsMap[word].length > 1) {
            output.push(normalizedWordsMap[word]);
        }
    });

    return output;
}
