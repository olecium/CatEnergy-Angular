// Main menu show/hide handler for mobile
/*
let menuButton = document.querySelector('.main-nav__toggle');
let mainMenu = document.querySelector('.main-nav');

menuButton.addEventListener('click', function(){
  if(this.classList.contains('main-nav__toggle--active')){
    mainMenu.classList.remove('main-nav--open');
    this.classList.remove('main-nav__toggle--active');
  } else {
    mainMenu.classList.add('main-nav--open');
    this.classList.add('main-nav__toggle--active');
  }
});
*/
// Cat slider image change
let slider = document.querySelectorAll('.slider__label');
slider.forEach((slider) => {
  slider.addEventListener('click', () => {
    let labelFor = slider.getAttribute('for');
    let img = slider.parentNode.parentNode.querySelector('.slider__image');

    if(labelFor == 'before'){
      img.classList.remove('slider__image--after');
    } else {
      img.classList.remove('slider__image--before');
    }
    img.classList.add(`slider__image--${labelFor}`);
  });
});
