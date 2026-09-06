const getTheTitles = function (books) {
  let arrayTitleBooks = books.map((elem) => {
    return elem.title;
  });
  return arrayTitleBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
