const convertToCelsius = function (tempFarenheit) {
  tempCelcius = ((tempFarenheit - 32) * 5) / 9;

  return +tempCelcius.toFixed(1);
};

const convertToFahrenheit = function (tempCelcius) {
  tempFarenheit = (tempCelcius * 9) / 5 + 32;

  return +tempFarenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
