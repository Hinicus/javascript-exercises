const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arrOldest) {
  let peopleArr = arrOldest.map((item) => {
    if (item.yearOfDeath === undefined) {
      item.yearOfDeath = new Date().getFullYear();
    }
    return {
      name: item.name,
      age: item.yearOfDeath - item.yearOfBirth,
    };
  });

  peopleArr.sort((a, b) => a.age - b.age);

  return peopleArr[peopleArr.length - 1];
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
