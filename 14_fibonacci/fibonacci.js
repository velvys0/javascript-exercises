const fibonacci = function(toNum) {
let result = [1]

for (i = 1; i < toNum; i++) {
    console.log('tste')
    if (result.length === 1) {
        result.push(1)
        console.log(result)
        continue
    }
    console.log(result.at(-1))
    result.push(result.at(-1) + result.at(-2))
    console.log(result)
}
return result.at(-1)

};
// Do not edit below this line
module.exports = fibonacci;
