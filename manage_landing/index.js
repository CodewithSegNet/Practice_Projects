// getting item 
const burger = document.querySelector('.btn-hamburger');
const body = document.querySelector('html');
const header = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.btn-close')
const overlay = document.querySelector('.overlay');
const fadeItems = document.querySelectorAll('.has-fade')


//adding eventListener to burger to access btn 
burger.addEventListener('click', function() {
    if(header.classList.contains('showlinks')){
        header.classList.remove('showlinks');

         //adding forEach statement to animation 
        fadeItems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out')
        });
       
    }else{
        header.classList.add('showlinks');
        burger.classList.add('remove'); 
        closeBtn.classList.add('showlinks');
        body.classList.add('noscroll');

         //adding forEach statement to animation 
        fadeItems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out')
        });
    }
});

//adding eventListener to close btn
closeBtn.addEventListener('click', function() {
    if(header.classList.contains('showlinks')){
        header.classList.remove('showlinks');
        closeBtn.classList.remove('showlinks');
        burger.classList.remove('remove'); 
        body.classList.remove('noscroll'); 

        //adding forEach statement to animation 
        fadeItems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out')
        });
         
    }else{
        header.classList.add('showlinks');
        
         //adding forEach statement to animation 
        fadeItems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out')
        }); 
    }
});



