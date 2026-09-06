//Check if the year are the following
//if a year divisible by 4 but not 100, then true
//if a year divisible by 400 then true

const leapYears = function (year) {
  let div4 = year / 4;
  let div100 = year / 100;
  let div400 = year / 400;

  if (Number.isInteger(div4) && !Number.isInteger(div100)) {
    return true;
  } else if (Number.isInteger(div400)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
