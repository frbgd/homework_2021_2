'use strict';


/**
 * Find anagram in input word list
 * @param {string[]} input - list of words
 * @returns {string[][]} - list of anagrams
 */
const anagram = (input) => {
    const output = [];

    if (!(Array.isArray(input) && input.every((item) => typeof item === 'string')))
        return output;

    input.sort();
    const normalizedWordsMap = {};
    const normalized = input.map((word) =>
        word.split('').sort().join(''));

    normalized.forEach((word, idx) => {
        if (!normalizedWordsMap.hasOwnProperty(word))
            normalizedWordsMap[word] = [];
        normalizedWordsMap[word].push(input[idx]);
    });

    Object.keys(normalizedWordsMap).forEach((word) => {
        if(normalizedWordsMap[word].length > 1)
            output.push(normalizedWordsMap[word]);
    });

    return output;
}
