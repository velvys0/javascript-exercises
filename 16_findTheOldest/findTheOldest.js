const findTheOldest = function(people) {

let sorted = people.sort((a, b) => {
    if (b.yearOfDeath === undefined || a.yearOfDeath === undefined) {
        let currYear = new Date().getFullYear() 
        return (currYear - b.yearOfBirth) - (currYear - a.yearOfBirth)
    }
    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
})
return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;