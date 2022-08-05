const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.buttonStart.addEventListener('click', colorBackgroundClick);
refs.buttonStop.addEventListener('click', stopColorBackgroundClick);

let isActive = false;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorBackgroundClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorBackgroundClick() {
  clearInterval(intervalId);
  isActive = false;
}
