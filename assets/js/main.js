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

(function( $ ){
    var namePlugin = 'validForm',
        __item     = '.js-valid-form__item',
        __button   = '.js-valid-form__button',
        __error    = '.js-valid-form__error';

    var methods = {
        init : function( options ) {

            return this.each(function(){

                var $this = $(this),
                    data = $this.data(namePlugin),
                    $items = $this.find(__item),
                    $inputs = $items.find('input'),
                    $buttons = $items.find(__button),
                    idTimer = null;

                 // Если плагин ещё не проинициализирован
                 if ( ! data ) {
                   //Тут выполняем инициализацию
                   $(this).data(namePlugin, {
                       target : $this
                   });
                }

                $inputs.on('validation.' + namePlugin, function(){
                    _inputValidation($(this));
                })

                $this.on('submit', function(e){
                    $inputs.trigger('validation.' + namePlugin);
                    var isValidForm = _validationForm($(this));

                    if (!isValidForm){
                        return false;
                    }

                })

                $inputs.on('keydown focusout', function(){
                    var $input = $(this);
                    clearTimeout(idTimer);

                    idTimer = setTimeout(function(){
                        _inputValidation($input);
                    }, 50)
                });

            });
        },
        destroy : function( ) {

            return this.each(function(){

             var $this = $(this),
                 data = $this.data(namePlugin);

             // пространства имён рулят!!11
             $(window).unbind('.' + namePlugin);
             $this.removeData(namePlugin);

            })

        },
        vilidation : function( ) {
            return this.each(function(){
                var $this = $(this);
                _validationForm($this);
            })
        }
    };

    function _validationForm($form){
        var $items = $form.find(__item),
            countitems = $items.length,
            countValiditems = 0,
            isValidForm = false;

        $items.each(function(){
            var $item = $(this),
                isValid = $item.data('isvalid');
                console.log('item valid = ' + isValid);
            if (isValid){
                countValiditems ++
            }
        })

        //Форма валидна, если все элементы формы прошли валидацию или элементов вовсе нет
        if ( countitems === countValiditems || countitems === 0){
            _formSucces($form)
            isValidForm = true;
        } else {
            _formFailure($form);
            isValidForm = false;
        }
        return isValidForm;
    }

    function _formSucces($form) {
        $form.data('isvalid', true);
    }
    function _formFailure($form) {
        $form.data('isvalid', false);
    }

    function _inputValidation($input){
        var $item = $input.closest(__item),
            $error = $item.find(__error),
            type = $input[0].type,
            isvalid = false,
            value = $input.val();

        if ( type == 'text'){
            if ( $input.hasClass('js-mask-phone') ){
                value = value.replace(/\+7/, '').replace(/\D/g, '');

            }
            if ( value !== '' ){
                _inputSucces($input);
                isvalid = true;
            } else {
                _inputFailure($input);
                isvalid = false;
            }
        }

        return isvalid;
    }

    function _inputSucces($input){
        var $item = $input.closest(__item),
            $error = $item.find(__error);

        $item
            .data('isvalid', true)
            .removeClass('error')
            .addClass('succes');
        $input.data('isvalid', true);
        //$error.fadeOut();
    }
    function _inputFailure($input){
        var $item = $input.closest(__item),
            $error = $item.find(__error);

        $item
            .data('isvalid', false)
            .addClass('error')
            .removeClass('succes');
        $input.data('isvalid', false);
        //$error.fadeIn();
    }

  $.fn[namePlugin] = function( method ) {

    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
    }

  };

})( jQuery );

$(document).ready(function(){
    $('.js-valid-form').validForm();
});

$(function(){

    var imgPlacemark = 'data:image/png;base64,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'

    var mapContainer = $('.js-map');

    if (mapContainer.length){
        ymaps.ready(initMap);
    }


    function initMap(){
        var mapCenter = mapContainer.data('center');
        var mapTextBalloon = mapCenter;

        mapCenter = ymaps.geocode(mapCenter);

			mapCenter.then(
				function (res) {
					var CenterGeoObject = res.geoObjects.get(0),
						centerCoords = CenterGeoObject.geometry.getCoordinates();

                    var myMap = new ymaps.Map(mapContainer[0], {
                            center: centerCoords,
                            zoom: mapContainer.data('zoom') || 5,
                    		controls: ['zoomControl']
                        });

                    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                            balloonContent: mapTextBalloon
                        }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: 'default#image',
                            // Своё изображение иконки метки.
                            iconImageHref: imgPlacemark,
                            // Размеры метки.
                            iconImageSize: [44, 51],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-20, -40]
                        });

                    myMap.geoObjects.add(myPlacemark);
                    myMap.behaviors.disable('scrollZoom');
				}
            );
    }

});

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

$(document).ready(function(){
    var $buttonClose = $('.js-popup__close');

    $(document).on('click', ".js-popup__close", function(){
        $.magnificPopup.close();
    })
})

;$(document).ready(function(){
    $('.js-section-scroll').on('click', function(e){
        e.preventDefault();

        var $section = $(this).parents('.section'),
            curPageScroll = $(window).scrollTop();
            sectionTop = $section[0].getBoundingClientRect().top
            newTop = 0;

        newTop = curPageScroll + sectionTop;

         $('body, html').animate({scrollTop: newTop +'px'}, 500);

    });
});

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

$(document).ready(function(){

    $('.js-mask-phone').mask("+7 (999) 999-99-99",
        { completed:function(){
            this.trigger('validation.validForm');
            this.closest('.js-valid-form').trigger('validation.vilidForm');
        } },
        { autoclear: false },
        { placeholder:"+7 (___) ___-__-__" });


    //Просто попап для форм и любого контента
    $('.js-popup-open').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',
      showCloseBtn : false,

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });


});
