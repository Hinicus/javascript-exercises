const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let sum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
};

const multiply = function (arr) {
  let multiply = arr.reduce((acc, curr) => {
    return acc * curr;
  });
  return multiply;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let factorialArray = [];

  if (num === 0) {
    return 1;
  }

  for (let i = num; i >= 0; i--) {
    factorialArray[i - 1] = i;
  }

  return factorialArray.reduce((acc, curr) => {
    return acc * curr;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
