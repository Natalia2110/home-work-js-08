!function(){var e=document.querySelector(".feedback-form");console.log(e);e.addEventListener("input",(function(e){var t={email:e.target.value,message:e.target.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem(localStorageKey),e.reset()}))}();
//# sourceMappingURL=03-feedback.6a105ae7.js.map
