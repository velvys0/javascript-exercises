const sumAll = function(a, b) {

total = 0

if (a > b) {
    var min = b
    var max = a
} else if (a < 0 || b < 0
    || !Number.isInteger(a) || !Number.isInteger(b)
) {
    return 'ERROR'
} else {
    var min = a
    var max = b
}


for (i = min; i <= max; i++) {
    total += i
}

return total

}

// Do not edit below this line
module.exports = sumAll;
