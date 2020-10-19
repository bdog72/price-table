//
//
// console.log(1234);
//////////////////////////////////

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// ------------------

// for (let bozo = 0; bozo <= 20; bozo = bozo + 2) {
//   console.log(bozo);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//   console.log(i);
// }

//////////////////////////////////

// const animals = ['cat', 'dog', 'lion', 'snakes'];

// for (let i = animals.length - 1; i >= 0; i = i - 1) {
//   console.log(i, animals[i]);
// }

//////////////////////////////////

// const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

// for (let i = 0; i <= people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

//////////////////////////////////

// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`   j is: ${j}`);
//   }
// }

//////////////////////////////////

// const seatingChart = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i'],
// ];

// for (let row of seatingChart) {
//   for (let letter of row) {
//     console.log(letter);
//   }
// }

// for (let i = 0; i < seatingChart.length; i++) {
// console.log(seatingChart[i]);
//   const row = seatingChart[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

//////////////////////////////////

// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// const SECRET = 'bozo';
// let guess = prompt('Enter the secret code');
// while (guess !== SECRET) {
//   guess = prompt('Enter the secret code');
// }
// console.log('congrats');

//////////////////////////////////

// let input = prompt('Say Something');
// while (true) {
//   input = prompt(input);
//   if (input === 'bozo') {
//     break;
//   }
// }
// console.log('ok you win');

//////////////////////////////////

// let maximum = parseInt(prompt('Enter the maximum number'));

// while (!maximum) {
//   maximum = parseInt(prompt('Enter a valid number'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let playerGuess = parseInt(prompt('Enter your first guess'));

// let attempts = 1;

// while (playerGuess !== targetNum) {
//   attempts++;
//   if (playerGuess > targetNum) {
//     playerGuess = parseInt(prompt('too high, enter a new guess'));
//   } else {
//     playerGuess = parseInt(prompt('too low , enter a new guess'));
//   }
// }

// if (attempts === 1) {
//   console.log(`Correct, you got it on ${attempts} guess`);
// } else {
//   console.log(`Correct, you got it on ${attempts} guesses`);
// }

// console.log(`Correct, you got it on ${attempts} tries`);
// alert(`Correct, you got it on ${attempts} tries`);

//////////////////////////////////

// for (let character of 'bozo boy') {
//   console.log(character);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numbers) {
//   const result = num * num;
//   console.log(result);
// }

//////////////////////////////////
// const scores = {
//   a: 50,
//   b: 60,
//   c: 70,
//   d: 80,
// };

// for (let score in scores) {
//   console.log(score);
//   console.log(scores[score]);
//   console.log(`${score} scored: ${scores[score]}`);
// }

//////////////////////////////////
