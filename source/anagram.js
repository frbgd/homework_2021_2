'use strict';


/**
 * Find anagram in input word list
 * @param {[string]} input - list of words
 * @returns {*[[string]]} - list of anagrams
 */
const anagram = input => {
    const output = [];

    if (!(Array.isArray(input) && input.every(item => typeof item === 'string')))
        return output;

    input.sort();
    const map = {};
    const normalized = input.map(word =>
        word.split('').sort().join(''));

    normalized.forEach((item, idx) => {
        if (!map.hasOwnProperty(item))
            map[item] = [];
        map[item].push(input[idx]);
    });

    Object.keys(map).forEach(key => {
        if(map[key].length > 1)
            output.push(map[key]);
    });

    return output;
}
