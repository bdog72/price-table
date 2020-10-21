//
//
// console.log(123);
const nums = [1, 2, 3, 4, 5];

// const total = nums.map((num) => {
//   return num * 2;
// });

// console.log(total);

// console.log(nums);
// nums.forEach((num) => {
//   if (num % 2 === 0) {
//     // console.log(num);
//   } else if (num % 2 === 1) {
//     console.log(num);
//   }

// console.log(num);
// const total = num * num;
// console.log(total);
// return total;
// });

const movies = [
  {
    title: 'a',
    score: 70,
  },
  {
    title: 'b',
    score: 80,
  },
  {
    title: 'c',
    score: 90,
  },
  {
    title: 'd',
    score: 100,
  },
];

// movies.forEach((movie) => {
//   console.log(`${movie.title} scored a ${movie.score}/100`);
// });

// console.log('-------------------');

// const titles = movies.map((movie) => {
//   return movie.title.toUpperCase();
//   // console.log(`${movie.title} scored a ${movie.score}/100`);
// });

// console.log(titles);

/////////////////////////////////////

// function cleanNames(arr) {
//   return arr.map((trimNames) => {
//     return trimNames.trim();
//   });
// }

/////////////////////////////////////

// const add = (x, y) => {
//   return x + y;
// };

// const totalAdd = add(2, 2);
// console.log(totalAdd);

/////////////////////////////////////
// setTimeout(() => {
//   // console.log('Delay');
//   interval();
// }, 5000);

// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 1000);

// clearTimeout(() => {
//   interval();
// }, 5000);

/////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(num => {
//   return num % 2 === 2;
// });
// console.log(evenNumbers);

// const goodRatedMovies = movies.filter(movie => {
//   return movie.score > 80;
// });

// console.log(goodRatedMovies);

// const goodTitles = goodRatedMovies.map(tite => {
//   return tite.title;
// });

// console.log(goodTitles);

/////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = [11.12, 2.1, 3.42, 14.65, 5, 6, 7, 8, 9, 10];

const addNumbers = numbers.reduce((total, price) => {
  return total + price;
}, 100);

console.log(addNumbers);

/////////////////////////////////////
/////////////////////////////////////
