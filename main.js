(()=>{"use strict";function e(){let e=i(document.querySelector("#todo-form__title").value,document.querySelector("#todo-form__description").value,document.querySelector("#todo-form__date").value,document.querySelector("#todo-form__priority").value,document.querySelector("#todo-form__list").value);a(e,e.list)}function t(e){e.style.display="block"}function o(e){e.style.display="none"}function n(e,t){e.target===t&&(t.style.display="none")}let d={inbox:[],projects:[]},c="inbox";function i(e,t,o,n,d,c=((e=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&o[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t})()){return{title:e,description:t,dueDate:o,priority:n,list:d,id:c}}let l=i("Laundry","White clothes only","12-12-2021","low","inbox");function a(e,t){d[t].push(e)}function r(e,t){let o=d[e].findIndex((e=>e.id===t));d[e].splice(o,1)}function s(){localStorage.setItem("lists",JSON.stringify(d))}function u(){!function(){const e=document.querySelector(".todos__list");for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}(),JSON.parse(localStorage.getItem("lists"))[c].forEach((function(e){!function(e){const t=document.querySelector(".todos__list"),o=document.createElement("li");o.classList.add("todo"),o.dataset.id=e.id;const n=document.createElement("div");n.classList.add("todo__container");const d=document.createElement("h5");d.classList.add("todo__title"),d.textContent=e.title;const i=document.createElement("p");i.classList.add("todo__descirption"),i.textContent=e.description;const l=document.createElement("p");l.classList.add("todo__date"),l.textContent=e.dueDate;const a=document.createElement("span");a.classList.add("todo__priority"),a.textContent=e.priority;const m=document.createElement("input");m.type="checkbox",m.name="task-complete",m.classList.add("todo__checkbox"),m.setAttribute("aria-label","task complete"),m.addEventListener("change",(()=>{r(c,e.id)})),m.addEventListener("change",s),m.addEventListener("change",(()=>{u()}));const _=document.createElement("button");_.type="button",_.classList.add("todo__delete"),_.innerHTML="&times;",_.addEventListener("click",(()=>{r(c,e.id)})),_.addEventListener("click",s),_.addEventListener("click",(()=>{u()})),o.appendChild(n),n.appendChild(m),n.appendChild(d),n.appendChild(i),n.appendChild(l),n.appendChild(a),n.appendChild(_),t.appendChild(o)}(e)}))}i("Shopping","Need eggs and olive oil","12-06-2021","high","inbox"),i("Call John","Need to organise a catch up","18-07-2021","medium","inbox"),a(l,"inbox"),s(),u(),function(){const d=document.querySelector(".add-modal");document.querySelector(".add-modal__close").addEventListener("click",(()=>{o(d)}));const c=document.querySelector(".header__btn");c.addEventListener("click",(function(){document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",i.disabled=!0})),c.addEventListener("click",(()=>{t(d)}));const i=document.querySelector(".todo-form__btn");window.addEventListener("click",(e=>{n(e,d)})),document.querySelector("#todo-form__list").value,i.addEventListener("click",e),i.addEventListener("click",(()=>{o(d)})),i.addEventListener("click",s),i.addEventListener("click",(()=>{u()}))}(),document.querySelectorAll(".list-name").forEach((function(e){e.addEventListener("click",(()=>{var t;!function(e){c=e}(e.dataset.name),t=e,document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.contains("list-name--selected")||e.classList.toggle("list-name--selected"):e.classList.remove("list-name--selected")})),u()}))})),function(){let e=document.querySelector(".list-modal");document.querySelector(".add-list__btn").addEventListener("click",(()=>{t(e)})),document.querySelector(".list-modal__close").addEventListener("click",(()=>{o(e)})),window.addEventListener("click",(t=>{n(t,e)}))}(),function(e){const t=document.querySelector("#todo-form__title"),o=document.querySelector(".todo-form__btn");o.disabled=!0,t.addEventListener("input",(()=>{var e;e=o,""===t.value.trim()?e.disabled=!0:e.disabled=!1}))}()})();