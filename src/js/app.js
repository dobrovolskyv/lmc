import * as runingStr from "./modules/move.js";
import * as flsFunctions from "./modules/functions.js";
import * as accordionFunction from "./modules/accordion.js"


flsFunctions.isWebp();



// import Swiper, { Navigation, Pagination } from "swiper";
document.addEventListener('DOMContentLoaded', (e)=>{
  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
      if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.arrow');
        for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
  
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }
const headerSlides = new Swiper('.header__slides__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.header__swiper-pagination',
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
 
});

const servicesSwiper = new Swiper('.services__bot-tablet', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  slidesPerView: 4.2,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
   
   
  },
  
    
    resizeObserver: false,
  

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
    delay: 4500,
  },
});
const specialistSwiper = new Swiper('.specialist__sliders__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1.5,
      spaceBetween: 16
    },
  
    340: {
      slidesPerView: 2.2,
      spaceBetween: 24
    },
    640:{
      slidesPerView: 2.8,
      spaceBetween: 24
    },
   
    // when window width is >= 640px
    1000: {
      slidesPerView: 3.2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
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
    delay: 4500,
  },
});


const clinicSwiper = new Swiper('.clinic__right-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

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
  
  autoplay: {
    delay: 4200,
  },
});


const reviewsSwiper = new Swiper('.reviews__sliders__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2.2,
  spaceBetween: 24,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 1,
      spaceBetween: 24
    },
    600: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
  
   
    // when window width is >= 640px
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
  autoplay: {
    delay: 4500,
  },


});

const articlesCard = document.querySelector('.articles__bot-hidden');
const articlesBtn = document.querySelector('.articles__btn');

// if (articlesBtn && articlesCard ){articlesBtn.addEventListener('click', (e)=>{
//   if (articlesCard.style.display === "none") {
//     articlesCard.style.display = "grid";
//   } else {
//     articlesCard.style.display = "none";
//   }
// })}
if (articlesBtn && articlesCard ){articlesBtn.addEventListener('click', (e)=>{
  let cont = articlesCard;
      if(cont.style.maxHeight){
        articlesCard.style.maxHeight = null;
        articlesBtn.innerHTML="???????????????? ??????"
      } else {
        articlesCard.style.maxHeight = null;
        cont.style.maxHeight = cont.scrollHeight + "px";
        articlesBtn.innerHTML="???????????????? ?????? ????????????"
      }
})}


const offerCard = document.querySelector('.offer__bot-hidden');
const offerBtn = document.querySelector('.offer__btn');

if (offerBtn && offerCard){offerBtn.addEventListener('click', (e)=>{
  
      let cont = offerCard;
      if(cont.style.maxHeight){
        offerCard.style.maxHeight = null;
        offerBtn.innerHTML="???????????????? ??????"
        offerCard.style.overflow = 'hidden';
      } else {
        offerCard.style.maxHeight = null;
        cont.style.maxHeight = cont.scrollHeight + "px";
        offerBtn.innerHTML="???????????????? ?????? ??????????"
        offerCard.style.overflow = 'visible';
      }
    
    
})}
const archiveBtn = document.querySelector('.blog-archive__content-btn');
if (offerBtn && offerCard&& archiveBtn){offerBtn.addEventListener('click', (e)=>{
  
  let cont = offerCard;
  if(cont.style.maxHeight){
    
    archiveBtn.innerHTML="???????????????? ?????? ????????????"
  } else {
   
    archiveBtn.innerHTML="???????????????? ??????"
  }


})}
// var acc = document.getElementsByClassName("accordion__menu__item");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
      
//     } 
//   });
// }

const headerTop = document.querySelector('.header__top');

window.addEventListener('scroll', function(){
  if (headerTop){
    if (window.pageYOffset> 0){
      headerTop.style.backgroundColor = 'rgba(255, 249, 239, 1)';
    } else{
      headerTop.style.backgroundColor = 'rgba(255, 249, 239, 0.6)';
    }
  }
})


var acci = document.getElementsByClassName("accordion__menu__btn");
var i;

for (i = 0; i < acci.length; i++) {
  acci[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = 700 + "px";
    } 
  });
}

let menuBtn = document.querySelector('.menu__btn-phone');
let menu = document.querySelector('.menu-phone');


let openSecondMenu = document.querySelector('.menu-phone__middle-list');
let menuSecond = document.querySelector('.menu2-phone')
let btnBack = document.querySelector('.go-back2')


if (menuBtn && menu){menuBtn.addEventListener('click', function(){

	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  if( !menu.classList.contains('active') && menuSecond.classList.contains('active')){
    menuSecond.classList.toggle('active');
  }
	
})
}
if (openSecondMenu && menuSecond){openSecondMenu.addEventListener('click', function(){

	openSecondMenu.classList.toggle('active');
	menuSecond.classList.toggle('active');

	
})
}
if (btnBack){
  btnBack.addEventListener('click', function(){
  if (menuSecond){
    menuSecond.classList.remove('active')
  }
})
}


const alertStr= document.querySelector('.alert')
// runingStr.runStr();
// if(alert){
//   runingStr.runStr();
// }
accordionFunction.accordionAboutDoctor();
//
//
//

ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 400
});
ScrollReveal().reveal('.main-page__header',{ delay: 200, origin:'bottom'});
ScrollReveal().reveal('.title title__offer',{ delay: 300, origin:'bottom'});
ScrollReveal().reveal('.services',{ delay: 400, origin:'bottom' });
ScrollReveal().reveal('.about',{ delay: 300, origin:'bottom' });
ScrollReveal().reveal('.specialist',{ delay: 200, origin:'bottom' });
//
//
//
// let dots = document.querySelector('.dots');
// let more = document.querySelector('.more');
// let btnReviews = document.querySelector('.testBtn')


// btnReviews.addEventListener('click', function(){
//  if(dots.style.display === "none"){
//     dots.style.display ='block'
//     btnReviews.innerHTML='??????????????????';
//     more.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnReviews.innerHTML='????????????';
//     more.style.display = "block";
//   }
 
// })

})

