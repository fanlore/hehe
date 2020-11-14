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
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

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
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
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
    button.addEventListener('click', function (e) {
        e.preventDefault();
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
var page = document.querySelector('.page');
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
/*  плавный переход по якорям */

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document
            .querySelector(' ' + blockID)
            .scrollIntoView({behavior: "smooth", block: "start"});
    })
}
/*
window.addEventListener('scroll',function(){
    let header = document.querySelector('.header');
    if(window.pageYOffset > 400) {
        header.classList.add('header-fixed');
    }else {
        header.classList.remove('header-fixed');
    }
});
*/
const scroll = function (e) {
    const element = document.querySelector(".header");
    let scrolltop = pageYOffset;
    window.addEventListener("scroll", function () {
        if (mobNav.classList.contains('active') === false) {
            if (pageYOffset > scrolltop) {
                element
                    .classList
                    .add("header-up");
                element
                    .classList
                    .remove("header-down");
            } else {
                element
                    .classList
                    .add("header-down");
                element
                    .classList
                    .remove("header-up");
            }
        }
        scrolltop = pageYOffset;
    });
};
scroll();

/* video photo gfallery*/
require('fslightbox');
