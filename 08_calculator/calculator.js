const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;

	for(let i = 0; i < array.length; i++){
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  let sum = 1;

  for(let i = 0; i < array.length; i++){
    sum *= array[i];
  }

  return sum;
};

const power = function(num, power) {
  let finalNum = num;

  for(let i = 1; i < power; i++){
    finalNum *= num;
  }

  return finalNum;
};

const factorial = function(num) {
  let factorial = num;

  if(num === 0){
    factorial = 1;
    return factorial;
  }

  for(let i = num-1; i > 0; i--){
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
