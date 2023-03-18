const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

class Color {
  constructor() {
    this.colorId = null;
    this.isActive = false;
  }
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.colorId = setInterval(() => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStartEl.setAttribute('disabled', true);
    btnStopEl.removeAttribute('disabled', true);
  }
  stop() {
    clearInterval(this.colorId);
    this.isActive = false;

    btnStopEl.setAttribute('disabled', true);
    btnStartEl.removeAttribute('disabled', true);
  }
}
const changeColor = new Color();
btnStartEl.addEventListener('click', () => {
  changeColor.start();
});
btnStopEl.addEventListener('click', () => {
  changeColor.stop();
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
