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

console.log('-------------------');

const titles = movies.map((movie) => {
  return movie.title.toUpperCase();
  // console.log(`${movie.title} scored a ${movie.score}/100`);
});

console.log(titles);

/////////////////////////////////////

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
