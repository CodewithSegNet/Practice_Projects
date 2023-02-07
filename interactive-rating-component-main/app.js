// get items
const firstCard = document.querySelector('.first');
const secondCard = document.querySelector('.second');
const rating = document.getElementById('rating');
const line = document.querySelector('.span_2');
const btns = document.querySelectorAll('.btn-number');
const noRate = document.querySelector('.empty_rating')
const btnSubmit = document.getElementById('submit');
const fadeItems = document.querySelectorAll('.has-fade')


//adding eventlistener to submit btn
btnSubmit.addEventListener('click', () => {
if (secondCard.classList.contains('hidden')){
    secondCard.classList.remove('hidden')
    firstCard.style.display = "none";
   
}
});

 //getting input from each rating btn
    btns.forEach(function(btn){
        btn.addEventListener('click', () => {
            rating.innerHTML = btn.innerHTML;
            console.log(rating.innerHTML);
        })
        })
 


   
        

