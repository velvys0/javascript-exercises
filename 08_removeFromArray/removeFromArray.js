const removeFromArray = function(arr, ...toDel) {

for (i = 0; i < toDel.length; i++) {
        arr = arr.filter((x) => x !== toDel[i])
}    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
