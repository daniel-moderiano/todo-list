(()=>{"use strict";function e(){var e;e=n(document.querySelector("#todo-form__title").value,document.querySelector("#todo-form__description").value,document.querySelector("#todo-form__date").value,document.querySelector("#todo-form__priority").value),o.push(e)}function t(){const e=document.querySelector(".todo-form__btn");""===document.querySelector("#todo-form__title").value.trim()?e.disabled=!0:e.disabled=!1}let o=[];function n(e,t,o,n,d=((e=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&o[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t})()){return{title:e,description:t,dueDate:o,priority:n,id:d}}let d=n("Laundry","White clothes only","12-12-2021","low"),c=n("Shopping","Need eggs and olive oil","12-06-2021","high"),i=n("Call John","Need to organise a catch up","18-07-2021","medium");function l(){localStorage.setItem("todos",JSON.stringify(o))}function r(){!function(){const e=document.querySelector(".todos__list");for(;e.lastElementChild;)e.removeChild(e.lastElementChild)}(),JSON.parse(localStorage.getItem("todos")).forEach((function(e){!function(e){const t=document.querySelector(".todos__list"),o=document.createElement("li");o.classList.add("todo");const n=document.createElement("div");n.classList.add("todo__container");const d=document.createElement("h5");d.classList.add("todo__title"),d.textContent=e.title;const c=document.createElement("p");c.classList.add("todo__descirption"),c.textContent=e.description;const i=document.createElement("p");i.classList.add("todo__date"),i.textContent=e.dueDate;const l=document.createElement("span");l.classList.add("todo__priority"),l.textContent=e.priority;const r=document.createElement("input");r.type="checkbox",r.name="task-complete",r.classList.add("todo__checkbox"),r.setAttribute("aria-label","task complete");const a=document.createElement("button");a.type="button",a.classList.add("todo__delete"),a.innerHTML="&times;",o.appendChild(n),n.appendChild(r),n.appendChild(d),n.appendChild(c),n.appendChild(i),n.appendChild(l),n.appendChild(a),t.appendChild(o)}(e)}))}o.push(d),o.push(i),o.push(c),l(),r(),function(){const t=document.querySelector(".add-modal");document.querySelector(".add-modal__close").addEventListener("click",d);const o=document.querySelector(".header__btn");o.addEventListener("click",(function(){document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",n.disabled=!0})),o.addEventListener("click",(function(){t.style.display="block"}));const n=document.querySelector(".todo-form__btn");function d(){t.style.display="none"}window.addEventListener("click",(function(e){e.target==t&&(t.style.display="none")})),n.addEventListener("click",e),n.addEventListener("click",d),n.addEventListener("click",l),n.addEventListener("click",(()=>{r()}))}(),function(e){const o=document.querySelector("#todo-form__title");document.querySelector(".todo-form__btn").disabled=!0,o.addEventListener("input",t),t()}()})();