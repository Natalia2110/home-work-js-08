var e,t,a;console.log(e=document.querySelector(".feedback-form")),t="feedback-form-state",JSON.parse(localStorage.getItem(t)),(a=form.elements).email,a.message,e.addEventListener("input",function(e){var a=e.target.value;localStorage.setItem(t,a),console.log(a)}),e.addEventListener("submit",function(e){e.preventDefault(),e.CurrentTarget.reset()});
//# sourceMappingURL=03-feedback.7a0c5461.js.map
