const livelife_section = document.querySelector('.livelife-section')

livelife_section.addEventListener('click' ,(event) => {
  if (event.target.classList.contains('livelife-section__item_group')) {
    console.log(1)
  }
  if (event.target.classList.contains('livelife-section__item_medicine')) {
    window.location.href = 'https://vk.com/fanatplova'
  }
})
