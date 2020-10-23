//
//
////////////////////////////////////////////

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function () {
  h1.innerText = input.value;
});

////////////////////////////////////////////
// const mainForm = document.querySelector('form');

// mainForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const productInput = mainForm.elements.product;
//   const quantityInput = mainForm.elements.qty;
//   // const productInput = document.querySelector('#product').value;
//   // const quantityInput = document.querySelector('#qty').value;

//   const ulList = document.querySelector('#list');
//   const liList = document.createElement('li');
//   // const liList = document.createElement('li');
//   liList.textContent = `${productInput.value} - ${quantityInput.value}`;
//   ulList.append(liList);
//   productInput.value = '';
//   quantityInput.value = '';
// });

//////////////////////////////////////////
// const mainForm = document.querySelector('form');

// mainForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const productInput = document.querySelector('#product').value;
//   const quantityInput = document.querySelector('#qty').value;

//   const ulList = document.querySelector('#list');
//   const liList = document.createElement('li');
//   liList.textContent = `${productInput} - ${quantityInput}`;
//   ulList.append(liList);
//   productInput.value = '';
//   quantityInput.value = '';
// });
//////////////////////////////////////////
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// // })

// input.addEventListener('input', function (e) {
//     h1.innerText = input.value;
// })
