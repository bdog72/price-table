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

const seatingChart = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

for (let i = 0; i < seatingChart.length; i++) {
  // console.log(seatingChart[i]);
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
