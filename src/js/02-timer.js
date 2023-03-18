import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

btnEl.setAttribute('disabled', true);
btnEl.addEventListener('click', handleStart);
let selectDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnEl.removeAttribute('disabled', true);
      selectDate = selectedDates[0];
    }
  },
};
let timerId = null;

function handleStart() {
  timerId = setInterval(() => {
    const promoTime = selectDate - new Date();
    btnEl.setAttribute('disabled', true);
    if (promoTime <= 0) {
      clearInterval(timerId);
      Notify.success('Time is out');
      return;
    }
    const convertTime = convertMs(promoTime);
    daysEl.textContent = addLeadingZero(convertTime.days);
    hoursEl.textContent = addLeadingZero(convertTime.hours);
    minutesEl.textContent = addLeadingZero(convertTime.minutes);
    secondsEl.textContent = addLeadingZero(convertTime.seconds);
  }, 1000);
}

flatpickr(inputEl, options);

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
