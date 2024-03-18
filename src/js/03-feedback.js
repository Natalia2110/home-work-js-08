
const  feedbackFormEl= document.querySelector('.feedback-form');
console.log(feedbackFormEl);

const localStorageKey = "feedback-form-state";

// feedbackFormEl.elements.value = localStorage.getItem(key) ?? "";

let dataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const { email, message } = form.elements;
reloadPage();

function onFormInput(event) {

  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(localStorageKey, JSON.stringify(dataForm));
    
    // const feedbackForm = {
    //     email: event.target.value,
    //     message: event.target.value,
    // }
    // const evtTargetValue = event.target.value;
    // localStorage.setItem(localStorageKey , evtTargetValue);
    // console.log(evtTargetValue);
    
};

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
    event.preventDefault();
    // localStorage.removeItem(localStorageKey);
    console.log({ email: email.value, message: message.value });

    if (email.value === '' || message.value === '') {
      return alert('Please fill in all the fields!');
    }

    localStorage.removeItem(localStorageKey);
    event.currentTarget.reset();
    dataForm = {};
  };


feedbackFormEl.addEventListener('input', onFormInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);