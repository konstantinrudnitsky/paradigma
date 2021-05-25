document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      speed: 800,
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true
            },

            420: {
                slidesPerView: 2,
                spaceBetween: 0,
                centeredSlides: false
            },

            // // when window width is >= 640px
            655: {
                slidesPerView: 3,
                spaceBetween: 0
            }
        }
    });

    lightGallery(document.querySelector('.lightgallery_1'));
    lightGallery(document.querySelector('.lightgallery_2'));
    lightGallery(document.querySelector('.lightgallery_3'));
    lightGallery(document.querySelector('.lightgallery_4'));
    lightGallery(document.querySelector('.lightgallery_5'));
    lightGallery(document.querySelector('.lightgallery_6'));

    const map = document.getElementById('map');
    const link = document.querySelector('.address');
    const div = document.querySelector('body div');

    link.addEventListener('click', () => {
        
        if(div.classList.contains('fslightbox-container') || div.classList.contains('fslightbox-full-dimension') || div.classList.contains('fslightbox-fade-in-strong')){
        } else {
            map.style.display = "";
        }
    });

    const nav = document.querySelector('.main__nav');
    const menuClick = document.querySelector('.main__header-menu');
    const close = document.querySelector('.close');

    menuClick.addEventListener('click', () => {
        nav.classList.toggle('active-menu');
    });

    close.addEventListener('click', () => {
        nav.classList.remove('active-menu');
    });


});

