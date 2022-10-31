import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from "swiper";
document.addEventListener('DOMContentLoaded', (e)=>{
  // let isMobile = {
  //   Android: function() {return navigator.userAgent.match(/Android/i);},
  //   BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  //   iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  //   Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  //   Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  //   any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  // };
  //     let body=document.querySelector('body');
  //     if(isMobile.any()){
  //     body.classList.add('touch');
  //     let arrow=document.querySelectorAll('.arrow');
  //       for(i=0; i<arrow.length; i++){
  //       let thisLink=arrow[i].previousElementSibling;
  //       let subMenu=arrow[i].nextElementSibling;
  //       let thisArrow=arrow[i];
  
  //       thisLink.classList.add('parent');
  //     arrow[i].addEventListener('click', function(){
  //       subMenu.classList.toggle('open');
  //       thisArrow.classList.toggle('active');
  //     });
  //   }
  // }else{
  //   body.classList.add('mouse');
  // }
const headerSlides = new Swiper('.header__slides__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2000,
  },
});

const swiper = new Swiper('.specialist__sliders__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3.2,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  
   
    // when window width is >= 640px
    600: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 2500,
  },
});


const clinicSwiper = new Swiper('.clinic__right-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
  autoplay: {
    delay: 2200,
  },
});


const reviewsSwiper = new Swiper('.reviews__sliders__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  
   
    // when window width is >= 640px
    600: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
  autoplay: {
    delay: 2500,
  },
});


const articlesCard = document.querySelector('.articles__bot-hidden');
const articlesBtn = document.querySelector('.articles__btn');

articlesBtn.addEventListener('click', (e)=>{
  if (articlesCard.style.display === "none") {
    articlesCard.style.display = "grid";
  } else {
    articlesCard.style.display = "none";
  }
})


const offerCard = document.querySelector('.offer__bot-hidden');
const offerBtn = document.querySelector('.offer__btn');


offerBtn.addEventListener('click', (e)=>{
  if (offerCard.style.display === "none") {
    offerCard.style.display = "grid";
  } else {
    offerCard.style.display = "none";
  }
})
const offerServicesCard = document.querySelector('.offer-services__bot-hidden');
const offerServicesBtn = document.querySelector('.offer-services__btn');

offerServicesBtn.addEventListener('click', (e)=>{
  if (offerServicesCard.style.display === "none") {
    offerServicesCard.style.display = "grid";
  } else {
    offerServicesCard.style.display = "none";
  }
})


const questions = document.querySelectorAll('.about-doctor__contentbox');
const answer = document.querySelectorAll('.about-doctor__answer')

questions.forEach((question)=>{
  question.addEventListener('click', ()=>{
    question.classList.toggle('active')
  })
})



})
