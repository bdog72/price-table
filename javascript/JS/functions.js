//
//

// function greet(name) {
//   return console.log(`Hi ${name}`);
// }

// greet('Bozo');
// greet('Molly');

// const diceRoll = (num) => {
//   return Math.floor(Math.random() * num) + 1;
// };

// console.log(diceRoll(3));
// console.log(diceRoll(30));
// console.log(diceRoll(300));

/////////////////////////////////////

// function rant(message) {
//   for (let i = 1; i <= 3; i++) {
//     console.log(message.toUpperCase());
//   }
// }
// rant('I hate beets');

// forEach(() => {
//   return rant('I hate beets');
// });

// for (let i = 1; i <= 3; i++) {
//   rant('I hate beets');
// }

// rant('I hate beets');

/////////////////////////////////////

// function repeat(msg, numTimes) {
//   for (let i = 0; i < numTimes; i++) {
//     console.log(`${msg}`);
//   }
// }

// repeat('Hi', 3);

/////////////////////////////////////

// function isSnakeEyes(dice1, dice2) {
//   if (dice1 === 1 && dice2 === 1) {
//     console.log('Snake Eyes');
//   } else {
//     console.log('Not Snake Eyes');
//   }
// }

// isSnakeEyes(1, 1);
// isSnakeEyes(1, 1);
// isSnakeEyes(1, 5);
// isSnakeEyes(4, 5);

/////////////////////////////////////

function lastElement(arr) {
  if (arr.length === 0) {
    return null;
  }
  const last = arr[arr.length - 1];
  return last;
  // return arr[arr.length - 1];
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));
console.log(lastElement([11, 2]));

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
