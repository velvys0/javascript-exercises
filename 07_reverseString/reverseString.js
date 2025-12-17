const reverseString = function(text) {
    let result = [];
    result.push(text[0]);
    for (n of text) {
        result.push(n);
        console.log(n);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
