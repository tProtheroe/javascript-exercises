function isNegative(num1, num2){
    if(num1 < 1 || num2 < 0){
        return true;
    }
}

function notNumber(num1, num2){
    if(typeof num1 != "number" || typeof num2 != "number"){
        return true;
    }
}

const sumAll = function(num1, num2) {
    
    let sum = 0;  

    if(isNegative(num1, num2) || notNumber(num1, num2)){
        return "ERROR";
    }

    if(num1 > num2){
        let newFirst = num2;
        let newSecond = num1;   

        for(let i = newFirst; i <= newSecond; i++){
            sum += i;
        }
    } else {
        for(let i = num1; i <= num2; i++){
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

