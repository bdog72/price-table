//
//
// console.log(123);

//////////////////////////////////
const rollDice = (numSides = 6) => {
  return Math.floor(Math.random() * numSides) + 1;
};

const roll1 = rollDice();
const roll2 = rollDice(60);

console.log(roll1);
console.log(roll2);
//////////////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maxNumber = Math.max(...nums);
const minNumber = Math.min(...nums);

console.log(maxNumber);
console.log(minNumber);

//////////////////////////////////

function sum() {}

//////////////////////////////////
//////////////////////////////////
