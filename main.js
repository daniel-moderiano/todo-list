(()=>{"use strict";function e(){let e=d(document.querySelector("#todo-form__title").value,document.querySelector("#todo-form__description").value,document.querySelector("#todo-form__date").value,document.querySelector("#todo-form__priority").value,document.querySelector("#todo-form__list").value);i(e,e.list),console.log(o)}function t(){const e=document.querySelector(".todo-form__btn");""===document.querySelector("#todo-form__title").value.trim()?e.disabled=!0:e.disabled=!1}let o={inbox:[],projects:[]},n="inbox";function d(e,t,o,n,d,c=((e=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&o[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t})()){return{title:e,description:t,dueDate:o,priority:n,list:d,id:c}}let c=d("Laundry","White clothes only","12-12-2021","low","inbox");function i(e,t){o[t].push(e)}function l(e,t){let n=o[e].findIndex((e=>e.id===t));o[e].splice(n,1)}function r(){localStorage.setItem("lists",JSON.stringify(o))}function a(){!function(){const e=document.querySelector(".todos__list");for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}(),JSON.parse(localStorage.getItem("lists"))[n].forEach((function(e){!function(e){const t=document.querySelector(".todos__list"),o=document.createElement("li");o.classList.add("todo"),o.dataset.id=e.id;const d=document.createElement("div");d.classList.add("todo__container");const c=document.createElement("h5");c.classList.add("todo__title"),c.textContent=e.title;const i=document.createElement("p");i.classList.add("todo__descirption"),i.textContent=e.description;const s=document.createElement("p");s.classList.add("todo__date"),s.textContent=e.dueDate;const u=document.createElement("span");u.classList.add("todo__priority"),u.textContent=e.priority;const m=document.createElement("input");m.type="checkbox",m.name="task-complete",m.classList.add("todo__checkbox"),m.setAttribute("aria-label","task complete"),m.addEventListener("change",(()=>{l(n,e.id)})),m.addEventListener("change",r),m.addEventListener("change",(()=>{a()}));const _=document.createElement("button");_.type="button",_.classList.add("todo__delete"),_.innerHTML="&times;",_.addEventListener("click",(()=>{l(n,e.id)})),_.addEventListener("click",r),_.addEventListener("click",(()=>{a()})),o.appendChild(d),d.appendChild(m),d.appendChild(c),d.appendChild(i),d.appendChild(s),d.appendChild(u),d.appendChild(_),t.appendChild(o)}(e)}))}d("Shopping","Need eggs and olive oil","12-06-2021","high","inbox"),d("Call John","Need to organise a catch up","18-07-2021","medium","inbox"),i(c,"inbox"),r(),a(),function(){const t=document.querySelector(".add-modal");document.querySelector(".add-modal__close").addEventListener("click",d);const o=document.querySelector(".header__btn");o.addEventListener("click",(function(){document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",n.disabled=!0})),o.addEventListener("click",(function(){t.style.display="block"}));const n=document.querySelector(".todo-form__btn");function d(){t.style.display="none"}window.addEventListener("click",(function(e){e.target==t&&(t.style.display="none")})),document.querySelector("#todo-form__list").value,n.addEventListener("click",e),n.addEventListener("click",d),n.addEventListener("click",r),n.addEventListener("click",(()=>{a()}))}(),document.querySelectorAll(".list-name").forEach((function(e){e.addEventListener("click",(()=>{var t;!function(e){n=e}(e.dataset.name),t=e,document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.contains("list-name--selected")||e.classList.toggle("list-name--selected"):e.classList.remove("list-name--selected")})),a()}))})),function(e){const o=document.querySelector("#todo-form__title");document.querySelector(".todo-form__btn").disabled=!0,o.addEventListener("input",t),t()}()})();