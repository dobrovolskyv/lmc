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
      spaceBetween: 10
    },
  
    340: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
  
   
    // when window width is >= 640px
    1220: {
      slidesPerView: 4.2,
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
  slidesPerView: 2.2,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
  
   
    // when window width is >= 640px
    700: {
      slidesPerView: 2,
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

if (articlesBtn && articlesCard ){articlesBtn.addEventListener('click', (e)=>{
  if (articlesCard.style.display === "none") {
    articlesCard.style.display = "grid";
  } else {
    articlesCard.style.display = "none";
  }
})}


const offerCard = document.querySelector('.offer__bot-hidden');
const offerBtn = document.querySelector('.offer__btn');

// offerBtn.forEach((el)=>{
//   el.addEventListener('click',()=>{
//     console.log(offerCard)
//     if (offerCard.style.display === "none") {
//       offerCard.style.display = "grid";
//     } else {
//       offerCard.style.display = "none";
//     }
//   })
// })
if (offerBtn && offerCard){offerBtn.addEventListener('click', (e)=>{
  if (offerCard.style.display === "none") {
    offerCard.style.display = "grid";
  } else {
    offerCard.style.display = "none";
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
// function accord (className){
//   let  cnStr = className.toString();
//  let cn = document.getElementsByClassName(cnStr)
//  let i;
//  for (i = 0; i < cn.length; i++) {
//   cn[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
      
//     } 
//   });
// }

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
//new accord
//
//
//
// let accordMenu = ("#accordian a").addEventListener('click', function () {
//   var link = $(this);
//   var closest_ul = link.closest("ul");
//   var parallel_active_links = closest_ul.querySelector(".active");
//   var closest_li = link.closest("li");
//   var link_status = closest_li.classList.contains("active");
//   var count = 0;

//   closest_ul.find("ul").slideUp(function () {
//     if (++count == closest_ul.querySelector("ul").length)
//       parallel_active_links.removeClass("active");
//   });

//   if (!link_status) {
//     closest_li.children("ul").slideDown();
//     closest_li.addClass("active");
//   }
// });

// $("h3 a").on("click", ".InnerBar", function () {
//   $("h3 a span").removeClass("InnerBarActive");
//   $(this).addClass("InnerBarActive");
// });

// // -> Count Menus Topics
// $(".Counter01").html($(".Menu01 li").length);
// $(".Counter02").html($(".Menu02 li").length);
// $(".SubCounter02_01").html($(".SubMenu02-01 li").length);
// $(".SubCounter02_02").html($(".SubMenu02-02 li").length);
// $(".SubCounter02_03").html($(".SubMenu02-03 li").length);
// $(".Counter03").html($(".Menu03 li").length);
// $(".Counter04").html($(".Menu04 li").length);



})

