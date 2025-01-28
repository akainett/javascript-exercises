const calcAge = function(person) {
    if(!person.yearOfDeath) {
       person.yearOfDeath = new Date().getFullYear()
    }
    return person.yearOfDeath - person.yearOfBirth
}

const findTheOldest = function(people) {
    const oldestToYoungest =  people.sort((currentPerson, nextPerson) => calcAge(nextPerson) - calcAge(currentPerson))
    
    const oldestPerson = oldestToYoungest[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
