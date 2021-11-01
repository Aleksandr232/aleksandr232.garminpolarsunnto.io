$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1300,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="slider/chevron/chevron right solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="slider/chevron/chevron left solid.png"></button>',
        responsive: [
            {  
                breakpoint: 768,
                settings: {
                dots: true,
                arrows:false
                }
            }
        ]   
    });    
});