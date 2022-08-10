import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelayInput: document.querySelector("input[name='delay']"),
  delayStepInput: document.querySelector("input[name='step']"),
  amountInput: document.querySelector("input[name='amount']"),
};

refs.form.addEventListener('submit', onSubmitForm);

// function that gather input information entered by the user and passing this info as a parameter to the createPromise function
function onSubmitForm(event) {
  event.preventDefault();

  // Input values that typed by the user turned into a Number type
  let firstDelay = Number(refs.firstDelayInput.value);
  let step = Number(refs.delayStepInput.value);
  let amount = Number(refs.amountInput.value);

  // for loop that run for duration of amount entered by user
  for (let i = 1; i <= amount; i += 1) {
    //calling function createPromise and passing parameters "i"(count) to  "position" and number entered by user firstDelay to "delay"
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    // adding a step to the firstDelay that was entered by the user to each iteration
    firstDelay += step;
  }
}

// function that creates a promise and returns it
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
  return promise;
}
