import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector('.js-form'),
  submitBtn: document.querySelector('button'),
  amount: document.querySelector('[name="amount"]'),
  step: document.querySelector('[name="step"]'),
  delay: document.querySelector('[name="delay"]'),
};
refs.submitBtn.addEventListener('click', onFormSubmit);
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function onFormSubmit(event) {
  event.preventDefault();
  let newDelay = Number(refs.delay.value);
  let amount = Number(refs.amount.value);
  let step = Number(refs.step.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, newDelay)
      .then(({ position, delay }) => {
        Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      });
    newDelay = newDelay + step;
  }
}
