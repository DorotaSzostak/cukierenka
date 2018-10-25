$(document).ready(function(){

  let sliderContainer = document.querySelectorAll(".slider");
  sliderContainer.forEach((el, index) => {

    let slideritems = el.querySelectorAll('.slider__item')
    slideritems.forEach((el, index) => {
      let images = el.querySelectorAll('[data-img]').forEach((img, index)=>{
        let src = img.getAttribute('data-img');
        img.style.backgroundImage = 'url('+ src + ')';
      })

    })
  })


  $('.creation__slider').slick({
    autoplay: true,
    dots: false,
    slidesToShow: 1,
    slideToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [

      {
        breakpoint: 992,
      settings: {
        slidesToShow:1,
        arrows: false,
        infinite: false,
      }
      },
      {
        breakpoint: 768,
        settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '2rem',
              arrows: false,
              infinite: false
        }
      }
    ]
  });
});
