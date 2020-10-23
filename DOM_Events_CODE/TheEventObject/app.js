//
//
//
//

document.querySelector('button').addEventListener('mousedown', function (e) {
  console.log(e);
});

const input = document.querySelector('input');

input.addEventListener('keydown', function (e) {
  console.log(e.key, 'keydown');
  console.log(e.code);
  // console.log(e.target.value);
});

input.addEventListener('keyup', function (e) {
  console.log(e.key, 'keyup');
  console.log(e.code);
  // console.log(e.target.value);
});

// document.querySelector('button').addEventListener('click', function (evt) {
//     console.log(evt)
// })

// // const input = document.querySelector('input');
// // input.addEventListener('keydown', function (e) {
// //     console.log(e.key)
// //     console.log(e.code)
// // })
// // input.addEventListener('keyup', function () {
// //     console.log("KEYUP")
// // })

// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("LEFT!");
//             break;
//         case 'ArrowRight':
//             console.log("RIGHT!");
//             break
//         default:
//             console.log("IGNORED!")
//     }
// })
