const palindromes = function (input) {
    const forward = []

    for (letter in input) {
        console.log(input[letter])
        if (input[letter] === '!' || 
            input[letter] === ' ' ||
            input[letter] === ','
        ) {
            break
        }
        forward.push(input[letter])
        console.log(forward)
    }

    return forward === forward.reverse()

};

// Do not edit below this line
module.exports = palindromes;
