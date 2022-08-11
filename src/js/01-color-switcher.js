const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.buttonStart.addEventListener('click', colorBackgroundClick);
refs.buttonStop.addEventListener('click', stopColorBackgroundClick);

let isActive = false;
let intervalId = null;
refs.buttonStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorBackgroundClick() {
  // check if the button is active(default is false), when clicked second time - becomes true, then exit the scipt, do not run it
  if (isActive) {
    return;
  }
  isActive = true;

  intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
    refs.buttonStop.disabled = false;
    refs.buttonStart.disabled = true;
  }, 1000);
}

function stopColorBackgroundClick() {
  clearInterval(intervalId);
  isActive = false;
  refs.buttonStop.disabled = true;
  refs.buttonStart.disabled = false;
}
