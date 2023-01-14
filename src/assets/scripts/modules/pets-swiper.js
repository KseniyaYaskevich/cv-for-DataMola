 const petsSwiper = new Swiper('.pets__swiper', {
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   direction: 'horizontal',
   loop: true,
   grabCursor: true,
   slidesPerView: 1,

   pagination: {
     el: '.pets__pagination',
     clickable: true,
   },

   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

 petsSwiper.update();