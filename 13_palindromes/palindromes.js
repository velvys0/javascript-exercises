const palindromes = function (input) {
    let forward = []
    let backward = []

    for (letter in input) {
        if (input[letter] === '!' || 
            input[letter] === ' ' ||
            input[letter] === ',' ||
            input[letter] === '.'
        ) {
            continue
        }
        forward.push(input[letter])
    }
    backward = [...forward].reverse().join('').toLowerCase()
    forward = forward.join('').toLowerCase()
    return forward === backward
};

// Do not edit below this line
module.exports = palindromes;
