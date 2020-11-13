/* ПрогрессБар */
const progress = document.querySelector('.progress');
window.addEventListener('scroll', function () {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    progress.style.width = windowScroll / windowHeight * 100 + '%';
});

/* Слайдер */
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    }

})
var mySwiperStories = new Swiper('.swiper-container-stories', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.button-next-stories',
        prevEl: '.button-prev-stories'
    }

})

/* Читать далее */
/*
  var cards = document.querySelectorAll(".cities__card");
  let btn = document.querySelector(".btn");
  let dots = document.querySelector(".dots");
  let more = document.querySelector(".more");

cards.forEach(function(card){
    card.addEventListener('click',function(){
      console.log(this);
    })
})

/*
   if(dots.style.display === 'none') {
    dots.style.display = 'inline';
    btn.innerHTML = 'Читать далее';
    more.style.display = 'none';
  }else {
    dots.style.display = 'none';
    btn.innerHTML = 'Скрыть';
    more.style.display = 'inline';
  }
  */

let buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        let card = this.closest('.cities__content');
        let content = card.querySelector('.cities__description');
        let dots = content.querySelector('.dots');
        let more = content.querySelector('.more');
        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            button.innerHTML = 'Читать далее';
            more.style.display = 'none';
        } else {
            dots.style.display = 'none';
            button.innerHTML = 'Скрыть';
            more.style.display = 'inline';
        }
    });
});

/*бургер меню*/
var open = document.querySelector('.open');
var close = document.querySelector('.close');
var mobNav = document.querySelector('.mobile-navigation');

open.addEventListener('click', function () {
    mobNav
        .classList
        .add('active');
})
close.addEventListener('click', function () {
    mobNav
        .classList
        .remove('active');
})

require('fslightbox');