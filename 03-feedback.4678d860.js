const e=document.querySelector(".feedback-form");console.log(e);e.addEventListener("input",(function(e){const t={email:e.target.value,message:e.target.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem(localStorageKey),e.reset()}));
//# sourceMappingURL=03-feedback.4678d860.js.map
