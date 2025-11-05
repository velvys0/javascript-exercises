const repeatString = function(text, number) {
    let arr = [];
    if (number < 0) {
        return "ERROR"
    } else {}
    for (i = 1; i <= number; i++) {
        arr.push(text);
    }
    arr = arr.join('');

    return arr
};

// Do not edit below this line
module.exports = repeatString;
