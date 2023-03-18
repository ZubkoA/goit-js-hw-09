import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// import { Report } from 'notiflix/build/notiflix-report-aio';

const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

btnEl.setAttribute('disabled', true);
btnEl.addEventListener('click', handleStart);
let selectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < now) {
      alert('Please choose a date in the future');
    } else {
      btnEl.removeAttribute('disabled', true);
    }
  },
};
const now = new Date();
const opt = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  dateFormat: 'Y-m-d H:i',
};
const locale = navigator.language;
inputEl.value = new Intl.DateTimeFormat(locale, opt).format(now);
flatpickr(inputEl, options);

function handleStart() {
  intervalId = setInterval(() => {
    const promoTime = selectedDate - now;
    timerContent(convertMs(promoTime));
    btnEl.setAttribute('disabled', true);
    if (selectedDate - now < 1000) {
      clearInterval(intervalId);
      btnEl.removeAttribute('disabled', true);
    }
  }, 1000);
}
function timerContent({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}
// console.log(options.onClose());
//

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
