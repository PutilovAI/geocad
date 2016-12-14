;$(document).ready(function(){
    var __list = '.js-limit-list',
        __wrapHide = __list+'-hide',
        __more     = __list+'-more',
        $lists = $(__list);

    $lists.each(function(){
        var $this = $(this),
            limit = $this.data('max-items'),
            $items = $this.children();

        if ($items.length > limit){
            var $itemsHide = $items.filter(function(ind){
                return ind > limit-1 ? true : false
            });

            $itemsHide.wrapAll('<div class="js-limit-list-hide"></div>');
            $(__wrapHide).hide();

            var $control = $('<div/>')
                .addClass('limit-list__more')
                .html('<span class="limit-list__more-link js-limit-list-more close">Показать еще</span>')
                .appendTo($this)

        }

    })

    $('.js-wrapper').on('click', __more, function(e){
        var $this = $(this),
            $curList = $this.closest(__list),
            $curWrapHide = $curList.find(__wrapHide);

        if ( $this.hasClass('close') ){
            $curWrapHide.slideDown();
            $this.text('Скрыть').removeClass('close').addClass('open');

        } else {
            $curWrapHide.slideUp();
            $this.text('Показать еще').addClass('close').removeClass('open')
        }
    })
});
