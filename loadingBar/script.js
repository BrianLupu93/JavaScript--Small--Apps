const progressBar = document.querySelector('.progressBar');
const progressPercent = document.getElementById('progressPercent');
const message = document.querySelector('.message');
// CIRCLES ARRAY
const circles = Array.from(document.querySelector('.loadingCircles').children);
// circles[0] = document.querySelector('.circle1');
// circles[1] = document.querySelector('.circle2');
// circles[2] = document.querySelector('.circle3');
// circles[3] = document.querySelector('.circle4');
// circles[4] = document.querySelector('.circle5');
// LOADING BAR (MAIN FUNCTION)
function loadingBar() {
  let counter = 0;
  let intervalLoad = setInterval(function () {
    if (counter === 100) {
      clearInterval(intervalLoad);
      progressPercent.textContent = counter + '%';
      message.textContent = 'Complete';
      message.style.color = '#1fca09';
    } else {
      counter++;
      progressBar.style.width = counter + '%';
      progressPercent.textContent = counter + '%';
    }
  }, 200);
}

function circleStartBlink(circleNum) {
  circles.forEach(element => {
    element.style.opacity = '20%';
  });
  circles[circleNum].style.opacity = '100%';
  circles[circleNum].classList.add('circleShadow');
}
function circleStopBlink() {
  circles.forEach(element => {
    element.style.opacity = '20%';
    element.classList.remove('circleShadow');
  });
}
function blink() {
  let i = 0;
  const interval = setInterval(function () {
    let percentValue = progressPercent.textContent.split('%');
    let percentNumValue = parseInt(percentValue[0]);
    if (i > circles.length - 1) {
      i = 0;
    }
    circleStartBlink(i);
    i++;
    if (percentNumValue === 100) {
      clearInterval(interval);
      circleStopBlink();
    }
  }, 100);
}
blink();
loadingBar();
