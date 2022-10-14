import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    slidesPerView: 2,
   direction: 'vertical',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next'
   },
   autoplay:{
       delay: 2000,
       stopOnLastSlides: true,
       disableOnInteraction: false
   },
//    effect: 'fade',
 //   cubeEffect:{
 //       slideShadows: true,
 //       shadow: true,
 //       shadowOffset: 20,
 //       shadowScale: 0.94
 //   }
   
   });

