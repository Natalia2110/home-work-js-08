var e,t,n,r,i,o,a,u,f,l,c,s;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},null==(r=e.parcelRequired7c6)&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(i=r.register)("dCfNN",function(t,n){var i=r("6aBn7"),o="Expected a function",a=0/0,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=d||v||Function("return this")(),p=Object.prototype.toString,g=Math.max,b=Math.min,y=function(){return m.Date.now()};function x(e){var t=void 0===e?"undefined":(0,i._)(e);return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":(0,i._)(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return a;if(x(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=l.test(e);return r||c.test(e)?s(e.slice(2),r?2:8):f.test(e)?a:+e}t.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw TypeError(o);return x(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),function(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function p(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function h(){var e,n,r,i=y();if(p(i))return j(i);f=setTimeout(h,(e=i-l,n=i-c,r=t-e,d?b(r,a-n):r))}function j(e){return(f=void 0,v&&r)?m(e):(r=i=void 0,u)}function T(){var e,n=y(),o=p(n);if(r=arguments,i=this,l=n,o){if(void 0===f)return c=e=l,f=setTimeout(h,t),s?m(e):u;if(d)return f=setTimeout(h,t),m(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=O(t)||0,x(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:j(y())},T}(e,t,{leading:r,maxWait:t,trailing:i})}}),i("6aBn7",function(e,t){function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}Object.defineProperty(e.exports,"_",{get:function(){return n},set:void 0,enumerable:!0,configurable:!0})}),o=r("dCfNN"),console.log(a=document.querySelector(".feedback-form")),u="feedback-form-state",a.addEventListener("input",(o&&o.__esModule?o.default:o)(function(e){f={email:c.value,message:s.value},localStorage.setItem(u,JSON.stringify(f))},500)),a.addEventListener("submit",function(e){if(e.preventDefault(),console.log({email:c.value,message:s.value}),""===c.value||""===s.value)return alert("Please fill in all the fields!");localStorage.removeItem(u),e.currentTarget.reset(),f={}}),f=JSON.parse(localStorage.getItem(u))||{},c=(l=form.elements).email,s=l.message,f&&(c.value=f.email||"",s.value=f.message||"");
//# sourceMappingURL=03-feedback.c73845ea.js.map
