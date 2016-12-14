;$(document).ready(function(){

    //Ranges
    (function(){
        var __range = '.js-range',
            __wrap  = __range + '-wrap',
            __input = __range + '-input',
            __inputMin = __input + '_min',
            __inputMax = __input + '_max';

        $(".js-range").slider({
        	min: 0,
        	max: 1000,
        	values: [0,1000],
        	range: true,
            create: function(event, ui) {
                var $this = $(this),
                    $wrap = $this.closest(__wrap),
                    $inputMin = $wrap.find(__inputMin),
                    $inputMax = $wrap.find(__inputMax),
                    inputMinVal = $inputMin.val(),
                    inputMaxVal = $inputMax.val(),
                    limitMin = $this.data('min'),
                    limitMax = $this.data('max'),
                    valueMin = null,
                    valueMax = null;


                if ( inputMinVal ){

                    if ( inputMinVal > inputMaxVal ){
                        inputMinVal = inputMaxVal;
                	} else if( inputMinVal < limitMin ){
                        inputMinVal = limitMin;
                    }

                    $inputMin.val(inputMinVal);
                    valueMin = inputMinVal;

                } else {
                    valueMin = limitMin;
                    $inputMin.val(limitMin);
                }

                if ( inputMaxVal ){

                    if ( inputMaxVal < inputMinVal ){
                        inputMaxVal = inputMinVal;
                	} else if ( inputMaxVal > limitMax ){
                        inputMaxVal = limitMax;
                    }

                    $inputMax.val(inputMaxVal);
                    valueMax = inputMaxVal;
                } else {
                    valueMax = limitMax;
                    $inputMax.val(limitMax);
                }

                $this.slider({
                    min : limitMin,
                    max : limitMax,
                    values: [valueMin, valueMax]
                })
            },
        	stop: function(event, ui) {
                var $this = $(this),
                    $wrap = $this.closest(__wrap),
                    $inputMin = $wrap.find(__inputMin),
                    $inputMax = $wrap.find(__inputMax);


        		$inputMin.val( $this.slider("values",0) );
        		$inputMax.val( $this.slider("values",1) );

            },
            slide: function(event, ui){
                var $this = $(this),
                    $wrap = $this.closest(__wrap),
                    $inputMin = $wrap.find(__inputMin),
                    $inputMax = $wrap.find(__inputMax);


        		$inputMin.val( $this.slider("values",0) );
        		$inputMax.val( $this.slider("values",1) );

            }
        });


        $(__input).on('change', function(e){

            var $this = $(this),
                $wrap = $this.closest(__wrap),
                $range = $wrap.find(__range),
                $inputMin = $wrap.find(__inputMin),
                $inputMax = $wrap.find(__inputMax),
                inputMinVal = parseInt($inputMin.val()),
                inputMaxVal = parseInt($inputMax.val()),
                limitMin = $range.data('min'),
                limitMax = $range.data('max');

            if ( $this.hasClass('js-range-input_min') ){

                if ( inputMinVal > inputMaxVal ){
                    inputMinVal = inputMaxVal;
            	} else if( inputMinVal < limitMin ){
                    inputMinVal = limitMin;
                }

                $this.val(inputMinVal);
            	$range.slider("values", 0, inputMinVal);
            } else {

                if ( inputMaxVal < inputMinVal ){
                    inputMaxVal = inputMinVal;
            	} else if ( inputMaxVal > limitMax ){
                    inputMaxVal = limitMax;
                }

                $this.val(inputMaxVal);
            	$range.slider("values", 1, inputMaxVal);
            }

        });
        $(__input).on('input change', function(e){
            var $this = $(this),
                strVal = $this.val(),
                newVal = '';
            //Пропускаем на ввод только числа
            if ( strVal.match(/\D/g) ){
                newVal = strVal.replace(/\D/g, '');
                $this.val(newVal);
            }
        })
    })();

    //Panel accordeon
    (function(){
        var __panel   = '.js-filter-panel',
            __label   = __panel + '-label',
            __content = __panel + '-content';

        $('.js-wrapper').on('click', __label, function(e){
            e.preventDefault();

            var $this     = $(this),
                $panel    = $this.closest(__panel),
                $content  = $panel.find(__content),
                stateAnimate = $panel.data('state-animate');

            if (stateAnimate) return;

            if ( $panel.hasClass('close') ){
                $content.slideDown(function(){
                    $panel.data('state-animate', false);
                });
                $panel
                    .data('state-animate', true)
                    .removeClass('close')
                    .addClass('open');

            } else {
                $content.slideUp(function(){
                    $panel
                        .data('state-animate', false)
                        .addClass('close')
                });

                $panel
                    .data('state-animate', true)
                    .removeClass('open')

            }

        });

    })();


});
