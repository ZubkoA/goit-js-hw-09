// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// const refs = {
//   inputData: document.querySelector('input#datetime-picker'),
//   startBtn: document.querySelector('button[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };
// let intervalId = null;
// let selectedDate = null;
// let currentDate = null;
// refs.startBtn.disabled = true;
// refs.startBtn.addEventListener('click', promoTimers);
// Report.info('Хелов май френд!', 'Будь добрий тицьни Okей!', 'Ок!');
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     // console.log(selectedDates[0]);
//     onSetData(selectedDates);
//   },
// };
// flatpickr('input#datetime-picker', options);
// function onSetData(selectedDates) {
//   selectedDate = selectedDates[0].getTime();
//   currentDate = new Date().getTime();
//   if (selectedDate < currentDate) {
//     refs.startBtn.disabled = true;
//     Report.failure(':pleading_face: Уууу...', 'щось не так! Спробуй ще раз');
//   } else {
//     refs.startBtn.disabled = false;
//   }
// }
// function promoTimers() {
//   intervalId = setInterval(() => {
//     currentDate = new Date().getTime();
//     const promoTime = selectedDate - currentDate;
//     timerContent(convertMs(promoTime));
//     refs.startBtn.disabled = true;
//     if (selectedDate - currentDate < 1000) {
//       clearInterval(intervalId);
//       Report.success('Вітаю!');
//       refs.startBtn.disabled = false;
//     }
//   }, 1000);
// }
// function timerContent({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );
//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
