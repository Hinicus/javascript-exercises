//Fibbonacci
//Set previous Term and next term
//add the previous and next term together

const fibonacci = function (term) {
  if (term < 0) {
    return "OOPS";
  } else {
    let nextTerm = 1;
    let prevTerm = 0;
    let temp = 0;
    for (let i = 1; i <= term; i++) {
      //1,1,2,3,5
      temp = nextTerm;
      nextTerm = prevTerm + nextTerm;
      prevTerm = temp;
    }
    console.log(prevTerm);
    return prevTerm;
  }
};

// Do not edit below this line
module.exports = fibonacci;

//1(p) + 1(n) = 2(t/p)
//1(n) + 2(p) = 3 (t/p)
//2 + 3 = 5
//3 + 5 = 8
