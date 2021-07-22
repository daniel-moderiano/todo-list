(()=>{"use strict";function e(){let e=r(document.querySelector("#todo-form__title").value,document.querySelector("#todo-form__description").value,document.querySelector("#todo-form__date").value,document.querySelector("#todo-form__priority").value,document.querySelector("#todo-form__list").value);s(e,e.list)}function t(e){e.style.display="block"}function n(e){e.style.display="none"}function o(e,t){e.target===t&&(t.style.display="none")}function d(e,t){""===e.value.trim()?t.disabled=!0:t.disabled=!1}function c(){return document.querySelector("#list-form__input").value.toLowerCase()}let i={inbox:[],projects:[]},l="inbox";function r(e,t,n,o,d,c=((e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let o=63&n[e];t+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return t})()){return{title:e,description:t,dueDate:n,priority:o,list:d,id:c}}let a=r("Laundry","White clothes only","12-12-2021","low","inbox");function s(e,t){i[t].push(e)}function u(e,t){let n=i[e].findIndex((e=>e.id===t));i[e].splice(n,1)}function m(){localStorage.setItem("lists",JSON.stringify(i))}function _(){!function(){const e=document.querySelector(".todos__list");for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}(),JSON.parse(localStorage.getItem("lists"))[l].forEach((function(e){!function(e){const t=document.querySelector(".todos__list"),n=document.createElement("li");n.classList.add("todo"),n.dataset.id=e.id;const o=document.createElement("div");o.classList.add("todo__container");const d=document.createElement("h5");d.classList.add("todo__title"),d.textContent=e.title;const c=document.createElement("p");c.classList.add("todo__descirption"),c.textContent=e.description;const i=document.createElement("p");i.classList.add("todo__date"),i.textContent=e.dueDate;const r=document.createElement("span");r.classList.add("todo__priority"),r.textContent=e.priority;const a=document.createElement("input");a.type="checkbox",a.name="task-complete",a.classList.add("todo__checkbox"),a.setAttribute("aria-label","task complete"),a.addEventListener("change",(()=>{u(l,e.id)})),a.addEventListener("change",m),a.addEventListener("change",(()=>{_()}));const s=document.createElement("button");s.type="button",s.classList.add("todo__delete"),s.innerHTML="&times;",s.addEventListener("click",(()=>{u(l,e.id)})),s.addEventListener("click",m),s.addEventListener("click",(()=>{_()})),n.appendChild(o),o.appendChild(a),o.appendChild(d),o.appendChild(c),o.appendChild(i),o.appendChild(r),o.appendChild(s),t.appendChild(n)}(e)}))}r("Shopping","Need eggs and olive oil","12-06-2021","high","inbox"),r("Call John","Need to organise a catch up","18-07-2021","medium","inbox"),s(a,"inbox"),m(),_(),function(){const d=document.querySelector(".add-modal");document.querySelector(".add-modal__close").addEventListener("click",(()=>{n(d)}));const c=document.querySelector(".header__btn");c.addEventListener("click",(function(){document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",i.disabled=!0})),c.addEventListener("click",(()=>{t(d)}));const i=document.querySelector(".todo-form__btn");window.addEventListener("click",(e=>{o(e,d)})),document.querySelector("#todo-form__list").value,i.addEventListener("click",e),i.addEventListener("click",(()=>{n(d)})),i.addEventListener("click",m),i.addEventListener("click",(()=>{_()}))}(),document.querySelectorAll(".list-name").forEach((function(e){e.addEventListener("click",(()=>{var t;!function(e){l=e}(e.dataset.name),t=e,document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.contains("list-name--selected")||e.classList.toggle("list-name--selected"):e.classList.remove("list-name--selected")})),_()}))})),function(){let e=document.querySelector(".list-modal");document.querySelector(".add-list__btn").addEventListener("click",(()=>{t(e)})),document.querySelector(".list-modal__close").addEventListener("click",(()=>{n(e)})),window.addEventListener("click",(t=>{o(t,e)}))}(),function(e){const t=document.querySelector("#todo-form__title"),n=document.querySelector(".todo-form__btn");n.disabled=!0,t.addEventListener("input",(()=>{d(t,n)}))}(),function(){const e=document.querySelector(".list-modal__btn"),t=document.querySelector("#list-form__input");e.disabled=!0,t.addEventListener("input",(()=>{console.log("input change"),d(t,e)})),e.addEventListener("click",(()=>{var e;!0===function(e){for(const t in i)if(e===t)return!0;return!1}(c())?alert("List already exists! Please enter a unique list name."):(e=c(),i[e]=[],m(),n(document.querySelector(".list-modal")),document.querySelector("#list-form__input").value="",document.querySelector(".list-modal__btn").disabled=!0)}))}()})();