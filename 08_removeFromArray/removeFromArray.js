const removeFromArray = function(array, remover) {
for (let i = 0; i < array.length; i++) {
    if (array[i] == remover) {
        array.splice(i, 1);
    }
    
}
console.log(array);
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
