'use strict';


const anagram = input => {
    const map = {};
    const output = [];

    input.sort();
    const normalized = input.map(word =>
        word.split('').sort().join(''));

    normalized.forEach((item, idx) => {
        map[item] = map[item] || [];
        map[item].push( input[idx] );
    });

    Object.keys(map).forEach(key => {
        if(map[key].length > 1){
            output.push(map[key]);
        }
    });

    return output;
}
