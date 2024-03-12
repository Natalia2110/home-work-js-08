
const  feedbackFormEl= document.querySelector('.feedback-form');
console.log(feedbackFormEl);

const LOCAL_KEY = "feedback-form-state";

// feedbackFormEl.elements.value = localStorage.getItem(key) ?? "";

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;

function onFormInput(event) {
    
    // const feedbackForm = {
    //     email: event.target.value,
    //     message: event.target.value,
    // }
    const evtTargetValue = event.target.value;
    localStorage.setItem(LOCAL_KEY , evtTargetValue);
    console.log(evtTargetValue);
    
};
function onFormSubmit(event) {
    event.preventDefault();
    // localStorage.removeItem(localStorageKey);
    event.CurrentTarget.reset();
  };


feedbackFormEl.addEventListener('input', onFormInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);