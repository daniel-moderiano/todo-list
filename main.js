(()=>{"use strict";let e=[];function o(e,o,t,d){return{title:e,description:o,dueDate:t,priority:d}}let t=o("Laundry","White clothes only","12-12-2021","low"),d=o("Shopping","Need eggs and olive oil","12-06-2021","high"),c=o("Call John","Need to organise a catch up","18-07-2021","medium");function n(){let t=o(document.querySelector("#todo-form__title").value,document.querySelector("#todo-form__description").value,document.querySelector("#todo-form__date").value,document.querySelector("#todo-form__priority").value);e.push(t),console.log(t)}for(e.push(t,d,c);"block"==document.querySelector(".add-modal").style.display;){const e=document.querySelector(".todo-form__btn");""!=document.querySelector("#todo-form__title").value?e.disabled=!1:e.disabled=!0}!function(){const e=document.querySelector(".add-modal");document.querySelector(".add-modal__close").addEventListener("click",t);const o=document.querySelector(".header__btn");function t(){e.style.display="none"}o.addEventListener("click",(function(){document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value=""})),o.addEventListener("click",(function(){e.style.display="block"})),window.addEventListener("click",(function(o){o.target==e&&(e.style.display="none")}));const d=document.querySelector(".todo-form__btn");d.addEventListener("click",n),d.addEventListener("click",t)}()})();