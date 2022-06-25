$(function () {

})
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.side-menu');
const btnClose = document.querySelector('.side-menu__close');

burger.addEventListener('click', () => {
    menu.classList.remove('side-menu--close');
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('side-menu--close');
});