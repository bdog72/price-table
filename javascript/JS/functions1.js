//
//
// console.log(123);

// function outer() {
//   // console.log('outer');
//   const heroes = ['Batman', 'Superman'];
//   function inner() {
//     // console.log('inner');
//     for (let hero of heroes) {
//       console.log(`dont be a ${hero}`);
//     }
//   }
//   inner();
// }
// outer();

/////////////////////////////////////

// function callTwice(bozo) {
//   bozo();
//   bozo();
// }

// function rollDice() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDice);

/////////////////////////////////////

// function makeBetweenFunc(min, max) {}

// makeBetweenFunc(5, 10);

// const myMath = {
//   PI: 3.14519,
//   square: (num) => num * num,
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// const calculation = myMath.square(10);
// const calculation1 = myMath.cube(2);

// console.log(calculation);
// console.log(calculation1);

/////////////////////////////////////

// const person = {
//   firstName: 'Bozo',
//   lastName: 'Boy',
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.fullName());
// person.lastName = 'Dog';
// console.log(person.fullName());

/////////////////////////////////////

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    // return `EGG ${this.eggCount++}`;
    this.eggCount++;
    return 'EGG';
  },
};

console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
// console.log(hen.layAnEgg());
console.log(hen.eggCount);

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
