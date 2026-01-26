const fibonacci = function(toNum) {

let result = []

for (i = 0; i < toNum; i++) {
    a = 0
    b = 0

    result.at(-1) === undefined ? a = 1 : a = result.at(-1)
    result.at(-2) === undefined ? b = 0 : b = result.at(-2)

    result.push(a + b)
    console.log(result)
}


return result.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
