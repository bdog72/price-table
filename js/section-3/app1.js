'use strict';
//
//

/////////////////////////////////////////

// function logger(name) {
//   console.log(`My name is Bozo`);
//   const str = `My name is ${name}`;
//   return str;
// }

// logger();
// logger();
// const message = logger('Molly');
// console.log(message);

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 2);
// console.log(appleOrangeJuice);

// console.log(Number('23'));
// console.log(String(23));

// const bill = 49;

// const tip = bill <= 500 && bill >= 50 ? 0.2 : 0.15;

// const total = `The bill was ${bill}. The tip was ${tip * bill}. The total was ${
//   tip * bill + bill
// }`;

// console.log(total);

// const r = Math.floor(Math.random() * 255) + 1;
// console.log(r);
/////////////////////////////////////////

// // function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1972);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2027 - birthYear;
// };
// const age2 = calcAge2(1972);
// console.log(age2);
//

// const calcAge3 = birthYear => {
//   return 2007 - birthYear;
// };
// const age3 = calcAge3(1972);
// console.log(age3);
//

// const calcAge4 = birthYear => 2017 - birthYear;
// const age4 = calcAge4(1972);
// console.log(age4);

/////////////////////////////////////////

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`);
//   }

//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1982, 'bozo'));
// console.log(yearsUntilRetirement(1970, 'mike'));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2020 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1972, 'Bozo'));
// console.log(yearsUntilRetirement(2012, 'Molly'));

/////////////////////////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const mixCream = flavors => {
//   return flavors * 4;
// };

// const makeIceCream = (chocolate, vanilla) => {
//   const cupsOfChocolate = mixCream(chocolate);
//   const cupsOfVanilla = mixCream(vanilla);
//   const cream = `I mix ${cupsOfChocolate} cups and ${cupsOfVanilla} cups together`;
//   return cream;
// };

// const mixture = makeIceCream(10, 20);
// console.log(mixture);

/////////////////////////////////////////

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins`);
//   }
//   console.log(avgDolphins, avgKoalas);
// };

// checkWinner(scoreDolphins, scoreKoalas);
// console.log(calcAverage(44, 23, 71));
// console.log(calcAverage(65, 54, 49));

// function checkWinner(avgDolphins, avgKoalas) {}

// const calcAverage = () => {
//   const dAverages1 = (44 + 23 + 71) / 3;
//   const dAverages2 = (85 + 54 + 41) / 3;
//   const kAverages1 = (65 + 54 + 49) / 3;
//   const kAverages2 = (23 + 34 + 27) / 3;

//   if (dAverages1 >= kAverages1 * 2) {
//     console.log(`Dolphins win`);
//   } else if (kAverages1 >= dAverages1 * 2) {
//     console.log(`Koalas win (${dAverages1} vs ${kAverages1})`);
//   } else {
//     console.log(`No one Wins`);
//   }

//   if (dAverages2 >= kAverages2 * 2) {
//     console.log(`Dolphins win (${dAverages2} vs ${kAverages2})`);
//   } else if (kAverages2 >= dAverages2 * 2) {
//     console.log(`Koalas win`);
//   } else {
//     console.log(`No one Wins`);
//   }

//   return [dAverages1, dAverages2, kAverages1, kAverages2];
// };

// const result = calcAverage();
// console.log(result);

/////////////////////////////////////////

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// console.log(friends);
// friends[2] = 'Bozo';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Smelt', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[1]);
// console.log(age1);
/////////////////////////////////////////

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add Elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove Elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Steven1'));

// if (friends.includes('Steven')) {
//   console.log(`You have a friend named steven`);
// } else {
// }
/////////////////////////////////////////

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcTip = billValue => {
//   const tipPercentage = billValue <= 300 && billValue >= 50 ? '0.15' : '0.20';
//   const tips = [];
//   tips.push(tipPercentage * billValue);
//   console.log(tips);
//   return `The tip is $${
//     tipPercentage * billValue
//   }. Total bill inluding tip is $${tipPercentage * billValue + billValue}`;
//   // return `The tip is ${tipPercentage}%`;
// };

// console.log(calcTip(100));
/////////////////////////////////////////

// const bozo = {
//   firstName: 'Bozo',
//   lastName: 'Beak',
//   age: 48,
//   job: 'developer',
//   friends: ['t-bone', 'josey', 'molly'],
// };

// console.log(
//   `${bozo.firstName} has ${bozo.friends.length} friends. His best friend is named ${bozo.friends[2]}`
// );

// console.log(bozo);
// console.log(bozo.lastName);
// console.log(bozo['firstName']);

// console.log(bozo);

// const nameKey = 'Name';

// const interestedIn = prompt(
//   'What do you want to know about Bozo? Choose between firstName, lastName, age, job, friends'
// );

// if (bozo[interestedIn]) {
//   console.log(bozo[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job, friends`
//   );
// }

// bozo.location = 'Mexico';

// if (interestedIn === 'age' || interestedIn === 'Age') {
//   alert(bozo.age);
// }

/////////////////////////////////////////

// const bozo = {
//   firstName: 'Bozo',
//   lastName: 'Beak',
//   birthYear: 1972,
//   job: 'developer',
//   friends: ['t-bone', 'josey', 'molly'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     return 2020 - this.birthYear;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }. ${decisions} driver license`;
//   },
// };

// console.log(bozo.calcAge());

// const decisions = bozo.hasDriversLicense ? 'He has a' : 'He does not have a';

// console.log(bozo.getSummary());

// console.log(
//   `${bozo.firstName} is a ${bozo.calcAge()} year old ${
//     bozo.job
//   }. ${decisions} driver license`
// );

/////////////////////////////////////////

// const mM = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mM.calcBMI();
// console.log(mM.bmi);

// const jS = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// jS.calcBMI();
// console.log(jS.bmi);

// const markRoundedBMI = Math.round(mM.bmi);
// const johnRoundedBMI = Math.round(jS.bmi);

// if (mM.bmi > jS.bmi) {
//   console.log(
//     `${mM.fullName}'s (${markRoundedBMI}) BMI is higher than ${jS.fullName}'s (${johnRoundedBMI}) BMI`
//   );
// } else {
//   console.log(
//     `${jS.fullName}'s (${johnRoundedBMI}) BMI is higher than ${mM.fullName}'s (${markRoundedBMI}) BMI`
//   );
// }

/////////////////////////////////////////

// const bozo = [
//   'Bozo',
//   'Beak',
//   2037 - 1991,
//   'developer',
//   ['t-bone', 'josey', 'molly'],
//   true,
// ];

// const types = [];

// for (let i = 0; i < bozo.length; i++) {
//   console.log(bozo[i], typeof bozo[i]);

//   // types[i] = typeof bozo[i];
//   types.push(typeof bozo[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];
// let i;
// for (i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// for (let i = 1; i <= 10; i++) {
//   console.log('bozo', i);
// }

// const bozo = [
//   'Bozo',
//   'Beak',
//   2037 - 1991,
//   'developer',
//   ['t-bone', 'josey', 'molly'],
//   true,
//   false,
// ];

// for (let i = bozo.length - 1; i >= 0; i--) {
//   console.log(i, bozo[i]);
// }

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting Exercise ${exercise}`);
  for (let reps = 1; reps <= 5; reps++) {
    console.log(`  -------Reps ${reps}`);
  }
}

// const types = [];

// for (let i = 0; i < bozo.length; i++) {

//   console.log(bozo[i], typeof bozo[i]);
// }

//   // types[i] = typeof bozo[i];
//   types.push(typeof bozo[i]);
// }
