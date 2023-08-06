const header__menu_btn = document.querySelector('.header__menu-btn')
const header__menu = document.querySelector('.header__menu')

header__menu_btn.addEventListener("click", () => {  
  if (header__menu.classList.contains('header__menu_none')) {
    header__menu.classList.remove('header__menu_none')
    header__menu.classList.add('header__menu_active')
  } else {
    header__menu.classList.remove('header__menu_active')
    header__menu.classList.add('header__menu_none')
  }
  
})