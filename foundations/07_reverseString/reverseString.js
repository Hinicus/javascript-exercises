//Declare variable to save reversed string
//Get length of the string
//Use loop to get index of the last character
//Save the character to the reverse variable
//Do this until all of the string have been reversed

const reverseString = function (string) {
  let reversedString = "";
  let stringLength = string.length;
  for (let i = stringLength; i > 0; i--) {
    reversedString += string[i - 1];
    console.log(reversedString);
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
