/*
    e.page.index - порядковый номер текущего исходного итема
    e.page.count - количество всех исходных итемов
*/
$(document).ready(function(){
    var $owlRecall = $('.js-carousel-recall');
    var $owlSlider = $('.js-carousel-slider');

    var __wrap      = '.js-carousel-wrap',
        __carousel  = '.js-carousel',
        __control   = '.js-carousel__control',
        __counter   = '.js-carousel-counter',
        __total     = '.js-carousel-counter-total',
        __thumbWrap = '.js-carousel-thumbs-wrap',
        __thumb     = '.js-carousel-thumb';


    $owlRecall.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoHeight:true
    });

    $owlSlider.on('initialize.owl.carousel', function(e) {
        changeSlide(e, true);
    })

    $owlSlider.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoHeight:true,
        smartSpeed: 500
    });


    $owlSlider.on('changed.owl.carousel', function(e) {
        changeSlide(e);
    });

    $('body').on('click', __thumb, function(e){
        var $curThumb = $(this),
            $wrap     = $curThumb.closest(__wrap),
            $carousel = $wrap.find(__carousel);

        var countSlide = $curThumb.index();
        $carousel.trigger('to.owl.carousel', countSlide)
    });


    $('body').on('click', __control, function(e){
        var $curControl = $(this),
            $carousel   = $curControl.parent().find(__carousel);

        $carousel = $carousel.length ? $carousel : $curControl.closest(__wrap).find(__carousel);

        if ($carousel.length){
            if ( $curControl.hasClass('js-carousel__control-next') ){
                $carousel.trigger('next.owl.carousel');
            } else {
                $carousel.trigger('prev.owl.carousel');
            }

        }

    })


    function changeSlide(e, isInit){
        var $carousel = $(e.target),
            $wrap     = $carousel.closest(__wrap),
            $counter  = $wrap.find(__counter),
            $total    = $wrap.find(__total),
            $thumbs   = $wrap.find(__thumb),
            $items    = null;

        var curCount = e.page.index == -1 ? 0 : e.page.index;
        $counter.text(curCount+1)

        $thumbs.removeClass('active')
        $thumbs.eq(curCount).addClass('active')

        if (isInit){
            $items = $carousel.children()
            $total.text($items.length)
        }
    }
});
