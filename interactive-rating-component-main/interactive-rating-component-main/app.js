//jshint esversion:6;

const firstCard = document.querySelector('.first');
const secondCard = document.querySelector('.second');
const rating = document.getElementById('rating');
const btns = document.querySelectorAll('.btn-number');
const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', () => {
if (secondCard.classList.contains('hidden')){
    secondCard.classList.remove('hidden')
    firstCard.style.display = "none";
    
}
});

btns.forEach(function(btn){
btn.addEventListener('click', () => {
     rating.innerHTML = btn.innerHTML;
});
});




