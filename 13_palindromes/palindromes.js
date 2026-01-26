const palindromes = function (input) {
    const forward = []
    let backward = []

    for (letter in input) {
        console.log(input[letter])
        if (input[letter] === '!' || 
            input[letter] === ' ' ||
            input[letter] === ',' ||
            input[letter] === '.'
        ) {
            continue
        }
        forward.push(input[letter])
        console.log(forward)
    }
    backward = [...forward].reverse()
    return forward.join() === backward.join()
};

// Do not edit below this line
module.exports = palindromes;
