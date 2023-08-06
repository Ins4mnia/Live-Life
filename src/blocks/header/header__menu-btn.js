const header__menu_btn = document.querySelector('.header__menu-btn')
const header__menu = document.querySelector('.header__menu')
const page = document.querySelector('.page')

header__menu_btn.addEventListener("click", () => {  
  if (header__menu.classList.contains('header__menu_none')) {
    header__menu.classList.remove('header__menu_none')
    header__menu.classList.add('header__menu_active')
    page.classList.add('page_no-scroll')
    header__menu_btn.innerHTML = 'X'
  } else {
    header__menu.classList.remove('header__menu_active')
    header__menu.classList.add('header__menu_none')
    page.classList.remove('page_no-scroll')
    header__menu_btn.innerHTML = '≡'
  }
})