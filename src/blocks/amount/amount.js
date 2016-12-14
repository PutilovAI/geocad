;$(document).ready(function(){
    var __amount = '.js-amount',
        __control = __amount + '-control',
        __reduce = __control + '_reduce',
        __add = __control + '_add',
        __input = __amount + '-input';

    $(__amount).each(function(){
        changeAmount($(this));
    })

    $('body').on('changeAmount.amount', __amount, function(e){
         changeAmount($(this));
    });

    $(__input).on('input change', function(e){
        var $input = $(this),
            $wrap = $input.closest(__amount),
            min = $wrap.data('min'),
            max = $wrap.data('max'),
            val = $input.val(),
            newVal = '';

        //Пропускаем на ввод только числа
        if ( val.match(/\D/g) ){
            newVal = val.replace(/\D/g, '');
            $input.val(newVal);
        }

        if (e.type == 'change'){
            $wrap.trigger('changeAmount.amount');
        }
    });

    $('body').on('click.amount', __control, function(e){
         e.preventDefault();

         console.log('cllick')

         var $control = $(this),
            $wrap = $control.closest(__amount),
            $input = $wrap.find(__input),
            min = $wrap.data('min'),
            max = $wrap.data('max'),
            val = parseInt( $input.val() );

        if ( $control.hasClass('disabled') ) return false;

        if ( $control.hasClass('js-amount-control_add') ){
            $input.val(val+1);
        } else {
            $input.val(val-1);
        }

        $wrap.trigger('changeAmount.amount');
    });

    function changeAmount($this){
        var $input = $this.find(__input),
            $reduce = $this.find(__reduce),
            $add = $this.find(__add),
            min = $this.data('min') || 1,
            max = $this.data('max'),
            val = $input.val();

            if ( val <= min ){
                controlDisabled($reduce);
                $input.val(min)
            } else {
                controlEnabled($reduce);
            }
            if ( val >= max ){
                controlDisabled($add);
                $input.val(max);
            } else {
                controlEnabled($add);
            }

    }

    function controlDisabled($control){
        $control.addClass("disabled")
    }
    function controlEnabled($control){
        $control.removeClass("disabled")
    }
});
