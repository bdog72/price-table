//
//

// const randomColorh1 = document.querySelector('#randomColorh1');
// const randomColorBtn = document.querySelector('#randomColorbtn');

// randomColorBtn.addEventListener('click', function () {
//   const newColor = randomColor();
//   document.body.style.backgroundColor = newColor;
//   randomColorh1.textContent = newColor;
// });

// const randomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`;
// };

const randomColorh1 = document.querySelector('#randomColorh1');
const randomColorBtn = document.querySelector('#randomColorbtn');

randomColorBtn.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  randomColorh1.textContent = newColor;
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const newArray = [r, g, b];

  const reducer = newArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  console.log(reducer);

  if (reducer < 300) {
    randomColorh1.style.color = '#fff';
  } else {
    randomColorh1.style.color = '#000';
  }

  return `rgb(${r}, ${g}, ${b})`;
};
