//Get the two arguments, num 1 and num 2
//if the arguments are neg, non-integers or strings return ERROR
//sort the numbers. If num 1 > num 2, then initVal = num 1 and endVal = num2, else reverse
//use for loop to iterate with i = initVal and condition being <= endVal
//Use reduce (?)
//store the value from sum and return it

const sumAll = function (num1, num2) {
  let initVal = 0;
  let endVal = 0;
  let sum = 0;
  console.log(Number.isInteger(num1));
  if (
    !(Number.isInteger(num1) && Number.isInteger(num2)) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      initVal = num2;
      endVal = num1;
    } else {
      initVal = num1;
      endVal = num2;
    }

    console.log("init: " + initVal + "\nend: " + endVal);

    for (let i = initVal; i <= endVal; i++) {
      sum = sum + i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
