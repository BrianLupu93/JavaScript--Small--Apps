const emptyBar = document.querySelector('.empty--bar');
const progressBar = document.querySelector('.progress--bar');
const progressPercent = document.getElementById('progress--percent');
const circle1 = document.querySelector('.circle--1');
const circle2 = document.querySelector('.circle--2');
const circle3 = document.querySelector('.circle--3');
const circle4 = document.querySelector('.circle--4');
const circle5 = document.querySelector('.circle--5');
const message = document.querySelector('.message');
const policeCar = document.getElementById('police--car');
const carLightAlert = document.querySelector('.car--light--alert');
const driveCar = document.querySelector('.drive--car');

// function moveTheBar() {
//   let percent = 0;
//   const loadingCircles = setInterval(loading, 600);
//   const repeatInterval = setInterval(function () {
//     if (percent === 100) {
//       progressBar.style.borderTopRightRadius = "2rem";
//       progressBar.style.borderBottomRightRadius = "2rem";
//       message.textContent = "Complete!";
//       clearInterval(repeatInterval);
//       clearInterval(loadingCircles);
//       circle5.style.opacity = "20%";
//       circle5.style.boxShadow = "none";
//     } else {
//       percent++;
//       progressBar.style.width = percent + "%";
//       progressPercent.textContent = percent + "%";
//       message.textContent = "Loading!";
//     }
//   }, 100);
// }

function loading() {
  const first = setTimeout(function () {
    circle5.style.boxShadow = 'none';
    circle1.style.opacity = '100%';
    circle1.style.boxShadow =
      '5px 5px 15px white, -5px -5px 15px white, 5px -5px 15px white, -5px 5px 15px white';
    circle2.style.opacity = '20%';
    circle3.style.opacity = '20%';
    circle4.style.opacity = '20%';
    circle5.style.opacity = '20%';
  }, 0);
  const second = setTimeout(function () {
    circle1.style.opacity = '20%';
    circle1.style.boxShadow = 'none';
    circle2.style.opacity = '100%';
    circle2.style.boxShadow =
      '5px 5px 15px white, -5px -5px 15px white, 5px -5px 15px white, -5px 5px 15px white';
    circle3.style.opacity = '20%';
    circle4.style.opacity = '20%';
    circle5.style.opacity = '20%';
  }, 100);
  const third = setTimeout(function () {
    circle1.style.opacity = '20%';
    circle2.style.opacity = '20%';
    circle2.style.boxShadow = 'none';
    circle3.style.opacity = '100%';
    circle3.style.boxShadow =
      '5px 5px 15px white, -5px -5px 15px white, 5px -5px 15px white, -5px 5px 15px white';
    circle4.style.opacity = '20%';
    circle5.style.opacity = '20%';
  }, 200);

  const firt = setTimeout(function () {
    circle1.style.opacity = '20%';
    circle2.style.opacity = '20%';
    circle3.style.opacity = '20%';
    circle3.style.boxShadow = 'none';
    circle4.style.opacity = '100%';
    circle4.style.boxShadow =
      '5px 5px 15px white, -5px -5px 15px white, 5px -5px 15px white, -5px 5px 15px white';
    circle5.style.opacity = '20%';
  }, 300);

  const fifth = setTimeout(function () {
    circle1.style.opacity = '20%';
    circle2.style.opacity = '20%';
    circle3.style.opacity = '20%';
    circle4.style.opacity = '20%';
    circle4.style.boxShadow = 'none';
    circle5.style.opacity = '100%';
    circle5.style.boxShadow =
      '5px 5px 15px white, -5px -5px 15px white, 5px -5px 15px white, -5px 5px 5px white';
  }, 400);
  lightingAlert();
}

// function moveCar() {
//   let movement = 2;
//   const moveToRight = setInterval(function () {
//     if (movement === 85) {
//       clearInterval(moveToRight);
//       movement = 2;
//     } else {
//       movement++;
//       driveCar.style.marginLeft = movement + "%";
//     }
//   }, 100);
// }

// moveTheBar();
