;$(document).ready(function(){
    var __tabs = '.js-tabs',
        __controls = '.js-tabs__control'
        __contents = '.js-tabs__content';

    var $tabs = $(__tabs),
        $controls = $(__tabs);

    $tabs.each(function(){
        var $wrapper = $(this),
            $controls = $wrapper.find(__controls),
            $contents = $wrapper.find(__contents);

        $controls.on('click', function(e){
            e.preventDefault();

            var $curControl = $(this),
                idtab       = $curControl.data('tab');

            if ( $curControl.hasClass('active') ){
                return;
            } else {
                $controls.removeClass('active');
                $contents.removeClass('active');
                $curControl.addClass('active');
                $contents.filter('[data-tab='+idtab+']').addClass('active');
            }
        })
    })
});
