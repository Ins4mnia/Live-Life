const header__menu_btn=document.querySelector(".header__menu-btn"),header__menu=document.querySelector(".header__menu"),livelife_section=(header__menu_btn.addEventListener("click",()=>{header__menu.classList.contains("header__menu_none")?(header__menu.classList.remove("header__menu_none"),header__menu.classList.add("header__menu_active")):(header__menu.classList.remove("header__menu_active"),header__menu.classList.add("header__menu_none"))}),document.querySelector(".livelife-section"));livelife_section.addEventListener("click",e=>{e.target.classList.contains("livelife-section__item_group")&&console.log(1),e.target.classList.contains("livelife-section__item_medicine")&&(window.location.href="https://vk.com/fanatplova")});