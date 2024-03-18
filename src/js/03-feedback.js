import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
};
// const  feedbackFormEl= document.querySelector('.feedback-form');
console.log(refs.form);
console.log(refs.input);
console.log(refs.textArea);

const localStorageKey = "feedback-form-state";

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

// feedbackFormEl.elements.value = localStorage.getItem(key) ?? "";

let dataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const { input, textArea } = refs;
// const { email, message } = refs.form.elements;
reloadPage();

function reloadPage() {
  if (dataForm) {
    input.value = dataForm.input || '';
    textArea.value = dataForm.textArea || '';
  }
}



// console.log(input);

function onFormInput(event) {

  dataForm = { input: input.value, textArea: textArea.value };
  localStorage.setItem(localStorageKey, JSON.stringify(dataForm));
    
    // const feedbackForm = {
    //     email: event.target.value,
    //     message: event.target.value,
    // }
    // const evtTargetValue = event.target.value;
    // localStorage.setItem(localStorageKey , evtTargetValue);
    // console.log(evtTargetValue);
    
};



function onFormSubmit(event) {
    event.preventDefault();
    // localStorage.removeItem(localStorageKey);
    console.log({ email: input.value, message: textArea.value });

    if (input.value === '' || textArea.value === '') {
      return alert('Please fill in all the fields!');
    }

    // localStorage.removeItem(localStorageKey);
    event.currentTarget.reset();
    dataForm = {};
  };

  // console.log(dataForm);

