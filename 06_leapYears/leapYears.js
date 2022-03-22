/*
Conditions:
- Divisible by 4
- Divisible by 400
- Not divisible by 100
*/

const leapYears = function(year) {

    if(year % 100 === 0 && !(year % 400 === 0)){
        return false;
    } else {
        if(year % 4 === 0){
            return true;
        } else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;

