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

    const normalizedWordsMap = input.slice().sort().reduce((map, word) => {
        const normalizedWord = word.split('').sort().join('')
        if (!map.has(normalizedWord)) {
            map.set(normalizedWord, []);
        }
        map.get(normalizedWord).push(word);
        return map;
    }, new Map());

    return [...normalizedWordsMap.values()].reduce((output, anagramGroup) => {
        if (anagramGroup.length > 1) {
            output.push(anagramGroup.sort());
        }
        return output;
    }, []);
}
