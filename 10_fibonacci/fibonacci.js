const fibonacci = function(fibonacci) {
    const numArr = [0, 1];
    fibonacci = parseInt(fibonacci);

    if(fibonacci < 0){
        return "OOPS";
    }

    for(let i = 2; i <= fibonacci; i++){
        numArr[i] = numArr[i - 1] + numArr[i - 2];
    }

    return numArr[fibonacci];
};

// Do not edit below this line
module.exports = fibonacci;
