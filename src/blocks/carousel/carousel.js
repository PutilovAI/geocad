
$(document).ready(function(){
    var $next = $('.js-carousel__control-next');
    var $prev = $('.js-carousel__control-prev');
    var $owlRecall = $('.js-carousel-recall');

    $owlRecall.owlCarousel({
        items: 1,
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
