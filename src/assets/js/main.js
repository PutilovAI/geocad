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
