function getAge(birth, death){
    return (death ? death : new Date().getFullYear()) - birth;
}

const findTheOldest = function(people) {

   return people.reduce((lastPerson, currentPerson) => {
       let lastAge = getAge(lastPerson.yearOfBirth, lastPerson.yearOfDeath)
       let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

       if(currentAge > lastAge){
           return currentPerson;
       } else {
           return lastPerson;
       }
    })
};

// Do not edit below this line
module.exports = findTheOldest;

/* 


*/