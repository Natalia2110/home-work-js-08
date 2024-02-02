
const  feedbackFormEl= document.querySelector('.feedback-form');
console.log(feedbackFormEl);

const key = "feedback-form-state";

// feedbackFormEl.elements.value = localStorage.getItem(key) ?? "";



function setLocalStorage(event) {
    const feedbackForm = {
        email: event.target.value,
        message: event.target.value,
    }
    // const evTargetValue = event.target.value;
    localStorage.setItem(key , JSON.stringify(feedbackForm));
    
};
function removeLocalStorage(event) {
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    feedbackFormEl.reset();
  }



feedbackFormEl.addEventListener('input', setLocalStorage);
feedbackFormEl.addEventListener("submit", removeLocalStorage);