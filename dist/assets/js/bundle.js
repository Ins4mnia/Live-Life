const header__menu_btn=document.querySelector(".header__menu-btn"),header__menu=document.querySelector(".header__menu"),page=document.querySelector(".page"),livelife_section=(header__menu_btn.addEventListener("click",()=>{header__menu.classList.contains("header__menu_none")?(header__menu.classList.remove("header__menu_none"),header__menu.classList.add("header__menu_active"),page.classList.add("page_no-scroll"),header__menu_btn.innerHTML="X"):(header__menu.classList.remove("header__menu_active"),header__menu.classList.add("header__menu_none"),page.classList.remove("page_no-scroll"),header__menu_btn.innerHTML="≡")}),document.querySelector(".livelife-section"));livelife_section.addEventListener("click",e=>{e.target.classList.contains("livelife-section__item_group")&&console.log(1),e.target.classList.contains("livelife-section__item_medicine")&&(window.location.href="https://vk.com/fanatplova")});