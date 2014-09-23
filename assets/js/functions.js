$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0 ) {
             $('.navigation').addClass('fixed animated zoomIn');
         }
         else {
             $('.navigation').removeClass('fixed animated zoomIn');
         }
    });

  $(function() {
    //init ripple effect
    options = {
        elements  :'.btn',
        focus     :'.btn',
        focusTimeOut: 600
      };
    rippleEffect = new $.RippleEffect(options);
  });

});
