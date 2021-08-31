'use strict';


function anagram(input) {
    const map = {};
    const output = [];

    input.sort();
    const normalized = input.map(function (word) {
        return word.split('').sort().join('');
    });

    normalized.forEach(function(item, idx){
        map[item] = map[item] || [];
        map[item].push( input[idx] );
    });

    Object.keys(map).forEach(function(key){
        if(map[key].length > 1){
            output.push(map[key]);
        }
    });

    return output;
}
