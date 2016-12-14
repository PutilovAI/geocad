
$(document).ready(function(){
    var $next = $('.js-carousel__control-next');
    var $prev = $('.js-carousel__control-prev');
    var $owlPopular = $('.js-carousel-popular');

    $owlPopular.owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        autoHeight:true
    });



    $next.on('click', function(){
        var $carousel = $(this).parent().find('.js-carousel')
        $carousel.trigger('next.owl.carousel');
    })
    $prev.click(function(){
        var $carousel = $(this).parent().find('.js-carousel')
        $carousel.trigger('prev.owl.carousel');
    })

});
