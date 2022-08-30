const findTheOldest = function (people) {

    return people.reduce((oldest, current) => {

        // get the age of the oldest Person
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        // get the age of the current Person
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        // returns the name of the oldest person
        return oldestAge < currentAge ? current : oldest;

    });
};

//
function getAge(birth, death) {

    // if there ist no deathDate, then get the current year
    if(!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
