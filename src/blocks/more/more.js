$(function(){
    var __wrap    = '.js-more-wrap',
        __content = '.js-more-content',
        __button  = '.js-more-button';

    $(__wrap).each(function(){
        var $wrap = $(this);

        if ($wrap.hasClass('open')){
            var $content = $wrap.find(__content),
                $button = $wrap.find(__button),
                textHide = $button.data('text-hide') || 'Свернуть';

            $content.show();
            $button.text(textHide);
            $wrap.removeClass('open');
        }
    })
    $('.js-wrapper').on('click', __button, function(e){
        var $this = $(this),
            $wrap = $this.closest(__wrap),
            $content = $wrap.find(__content),
            textShow = $this.data('text-show') || 'Развернуть',
            textHide = $this.data('text-hide') || 'Свернуть';

        if ( $content.is(':visible') ){
            $content.slideUp();
            $this.text(textShow);
            $wrap.removeClass('open');

        } else {
            $content.slideDown();
            $this.text(textHide);
            $wrap.addClass('open');

        }
    })
});
