$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1300,
        autoplay: true,
        autoplaySpeed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="slider/chevron/chevron right solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="slider/chevron/chevron left solid.png"></button>',
        responsive: [
            {  
                breakpoint: 768,
                settings: {
                dots: false,
                arrows:false
                }
            }
        ]   
    });
    $('ul.tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
          .eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    };

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//modal

    $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });

    });

    $('#feed_form_consu').validate({
        rules:{
            name:'required',
            phone:'required',
            email: {
                required: true,
                email: true
            }

        },
        messages:{
            name:'Пожалуйста, введите имя',
            maxlength:'Максимальное количиство символов 15',
            phone:{
                required: 'Пожалуйста, введите номер',
                phone:'Неправильно введен номер !',
                minlength:'Минимум 11 символов'
            },    
            email:{
                 required: 'Пожалуйста, введите email',
                 email:'Неправильно введен email !'
            }
        }
    });

});