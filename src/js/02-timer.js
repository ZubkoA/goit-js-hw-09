import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const btnEl = document.querySelector('button');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
btnEl.setAttribute('disabled', true);
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

// console.log(options.onClose());
// if (chooseData < Date.now())
//   window.alert('Please choose a date in the future');
// else btnEl.removeAttribute('disabled', true);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
