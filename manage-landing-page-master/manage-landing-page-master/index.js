const burger = document.querySelector('.btn-hamburger');
const nav = document.querySelector('nav');


burger.addEventListener('click', function() {
    nav.classList.toggle('showlinks');

});