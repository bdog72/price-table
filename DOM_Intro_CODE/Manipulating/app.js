//
//
const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
  const newButton = document.createElement('button');
  newButton.textContent = 'Bozo';
  container.appendChild(newButton);
}

// document.body.appendChild(newButton);

// const newImage = document.createElement('img');

// const textInput = document.querySelector('.textInput');

// console.log(newImage);
// console.log(textInput);
// newImage.setAttribute(
//   'src',
//   'https://images.unsplash.com/photo-1601758260820-6342add57279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
// );
// newImage.classList.add('square');
// // document.body.appendChild(newImage);
// textInput.insertAdjacentElement('afterend', newImage);
