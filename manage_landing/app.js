
//swiper function
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 60,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
      breakpoints: {
         300: {
           slidesPerView: 1,
           spaceBetween: 40
         },
         840: {
            slidesPerView: 2,
            spaceBetween: 40
          },
         1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
         1442: {
            slidesPerView: 3,
            spaceBetween: 50
         }
        
       
       },
 });


  	

 