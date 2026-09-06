const palindromes = function (string) {
  let word = (word) => {
    let processedWord = string
      .toLowerCase()
      .split("")
      .filter((char) => isAlphaNumeric(char))
      .join("");
    return processedWord;
  };

  console.log(word());

  //reverse string
  let reversedStringArray = () => {
    let stringReversal = string.split("");
    stringReversal.reverse();
    return stringReversal;
  };

  console.log(reversedStringArray());

  //Method for checking a char is Alphanumeric
  function isAlphaNumeric(char) {
    return /^[a-zA-Z0-9]+$/.test(char);
  }

  //Filter array
  let filteredStringArray = reversedStringArray().filter((char) =>
    isAlphaNumeric(char),
  );

  let reversedString = filteredStringArray.join("").toLowerCase();

  //comparison
  return word() === reversedString ? true : false;
};

console.log(palindromes("A nut for a jar of tuna."));

// Do not edit below this line
module.exports = palindromes;
