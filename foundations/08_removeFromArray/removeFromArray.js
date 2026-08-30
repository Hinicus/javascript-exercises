//Declare a new variable for the new array (non-immutability)
//find the element that corresponds to the remover arg
//Delete the element and shift it to the left (use splice)

//for multiple arguments
//turn the arguments into an array
//first index is the array
//consequent args are the elements to be remove
//use for loop to iterate every multiple remove args

//uses rest arguments
const removeFromArray = function (array, ...remover) {
  let newArray;
  let arrayIndexToRemove;

  //outer to check for the array length
  for (let i = 0; i < array.length; i++) {
    //inner to check remover length
    for (let j = 0; j < remover.length; j++) {
      arrayIndexToRemove = array.indexOf(remover[j]);
      if (arrayIndexToRemove != -1) {
        newArray = array.splice(arrayIndexToRemove, 1);
      }
    }
  }

  return array;
};

//[3,2,2,3]

// Do not edit below this line
module.exports = removeFromArray;
