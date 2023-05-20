

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    spaceBetween: 30,
    breakpoints: {
      
        240: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
            },

        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            },

        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            },
    }

  });

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    spaceBetween: 30,
    breakpoints: {
      
        240: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
            },

        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            },

        1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
            },
    }

  });

 

  document.getElementById("year").innerHTML = new Date().getFullYear();
