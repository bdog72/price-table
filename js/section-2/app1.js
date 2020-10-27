//
//

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young! She has ${yearsLeft} years`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.96;

// const markBMI = parseInt(78 / 1.69 ** 2);
// const johnBMI = parseInt(92 / 1.96 ** 2);

// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// const markString = `Marks BMI (${markBMI}) is higher than Johns BMI (${johnBMI})`;

// const johnString = `Marks BMI (${markBMI}) is lower than Johns BMI (${johnBMI})`;

// if (markBMI > johnBMI) {
//   console.log(markString);
// } else {
//   console.log(johnString);
// }
//////////////////////////////////////////
// const input = parseInt('1991');
// console.log(input + 18);

// const inputYear = '1972';
// console.log(Number(inputYear));

// console.log(Number(inputYear) + 18);
// console.log(Number('bozo'));

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//////////////////////////////////////////

// const money = 110;
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`Get a Job Bozo`);
// }

// let user;
// console.log(user);
// if (user === undefined) {
//   console.log(`User is undefined`);
// } else {
//   console.log(`User is defined`);
// }

//////////////////////////////////////////

// const favorite = Number(prompt('Pick a favorite number'));

// if (favorite === 5) {
//   console.log(`Cool, ${favorite} is a great number`);
// } else if (favorite === 7) {
//   console.log(`Cool, ${favorite} is also a great number`);
// } else {
//   console.log(`Number is not 5 or 7!`);
// }

//////////////////////////////////////////

const hasDriversLicense = true;
const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

// console.log(shouldDrive);

// const age = 16;

// if (age >= 20 || age < 30) {
//   console.log('correct');
// }

// const a = 'bozo';
// const a = false;
// const b = false;

// if (a || !b) {
//   console.log('a');
//   console.log('b');
// }

//////////////////////////////////////////

// const dAvgScore = (96 + 108 + 89) / 3;
// const kAvgScore = (88 + 91 + 110) / 3;
// let dAvgScore = (96 + 108 + 89) / 3;
// let kAvgScore = (88 + 91 + 110) / 3;

// if (dAvgScore === kAvgScore) {
//   console.log(`It's a Draw`);
// } else if (dAvgScore > kAvgScore && dAvgScore > 100) {
//   console.log(`Dolphins Won`);
// } else if (dAvgScore < kAvgScore && kAvgScore > 100) {
//   console.log(`Koalas Won`);
// }

// console.log(dAvgScore);
// console.log(kAvgScore);
//
//
//
// const dolphinsAverageScore = parseInt(((96 + 108 + 189) / 3).toFixed());
// const koalasAverageScore = parseInt(((88 + 91 + 110) / 3).toFixed());

// const minAverageScore = 100;

// if (dolphinsAverageScore === koalasAverageScore && minAverageScore === 100) {
//   console.log(`It was a Draw`);
// } else if (
//   dolphinsAverageScore > koalasAverageScore &&
//   dolphinsAverageScore &&
//   koalasAverageScore > 100
// ) {
//   console.log(`Dolphins Won`);
// } else if (
//   dolphinsAverageScore < koalasAverageScore &&
//   minAverageScore === true
// ) {
//   console.log(`Koalas Won`);
// } else {
//   console.log(`Neither team won. Minimum score of at least 100 was required`);
// }

// console.log(dolphinsAverageScore, 'Dolphins Average Score');
// console.log(`Dolphins Average Score is ${dolphinsAverageScore}`);
// console.log(dolphinsAverageScore);
// console.log(koalasAverageScore);

// const dolphinsScore = [96, 108, 89];

// const dolphinsAverageScore = dolphinsScore.reduce(
//   (accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }
// );
// console.log(dolphinsAverageScore);

//////////////////////////////////////////

// const day = 'bozoday';

// switch (day) {
//   case 'monday':
//     console.log(`Plan Course Structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case 'tuesday':
//     console.log(`Prepare theory videos`);
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log(`Write Code examples`);
//     break;
//   case 'friday':
//     console.log(`Record Videos`);
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log(`Enjoy the weekend`);
//     break;
//   default:
//     console.log(`Not a valid day`);
//     break;
// }

// if (day === 'monday') {
//   console.log(`Plan Course Structure`);
//   console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
//   console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log(`Write Code examples`);
// } else if (day === 'friday') {
//   console.log(`Record Videos`);
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log(`Enjoy the weekend`);
// } else {
//   console.log(`Not a valid day`);
// }

//////////////////////////////////////////
// console.log(1991);

// if (23 > 10) {
//   const str = `23 is bigger than 10`;
//   console.log(str);
// }

//////////////////////////////////////////

// const age = 23;
// const result = age >= 18 ? 'adult' : 'child';
// console.log(`You are a ${result}`);

//////////////////////////////////////////

// const billValues = [275, 40, 430];
// let tip;
// if (billValues[0] >= 50 && billValues[0] <= 300) {
//   tip = billValues * 0.15;
//   console.log(tip);
// }

// const tip1Percentage = 0.15;
// const tip2Percentage = 0.2;

// const billValues = [275, 40, 430];

// const tipResult1 = billValues[0] >= 50 && billValues[0] <= 300 ? 0.15 : 0.2;
// const tipResult2 = billValues[1] >= 50 && billValues[1] <= 300 ? 0.15 : 0.2;
// const tipResult3 = billValues[2] >= 50 && billValues[2] <= 300 ? 0.15 : 0.2;
// console.log(
//   `The bill was ${billValues[0]}, the tip was ${
//     tipResult1 * billValues[0]
//   }, and the total value was ${tipResult1 * billValues[0] + billValues[0]}`
// );
// console.log(
//   `The bill was ${billValues[1]}, the tip was ${
//     tipResult2 * billValues[1]
//   }, and the total value was ${tipResult2 * billValues[1] + billValues[1]}`
// );
// console.log(
//   `The bill was ${billValues[2]}, the tip was ${
//     tipResult3 * billValues[2]
//   }, and the total value was ${tipResult3 * billValues[2] + billValues[2]}`
// );

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}. Total was ${bill + tip}`
);

//////////////////////////////////////////
