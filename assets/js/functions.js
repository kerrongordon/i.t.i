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
             $('.navigation').addClass('fixed animated fadeInDown');
         }
         else {
             $('.navigation').removeClass('fixed animated fadeInDown');
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




  //create the slider
  $('.cd-testimonials-wrapper').flexslider({
    selector: ".cd-testimonials > li",
    animation: "slide",
    controlNav: false,
    slideshow: true,
    smoothHeight: true,
    start: function(){
      $('.cd-testimonials').children('li').css({
        'opacity': 1,
        'position': 'relative'
      });
    }
  });
  

    
 

  //open the testimonials modal page
  $('.cd-see-all').click(function(){
    setTimeout(function(){ $('.cd-testimonials-all').addClass('is-visible'); $('.cd-testimonials-wrapper').css("height", resizeDiv() + 'px'); }, 300);
  });

  //close the testimonials modal page
  $('.cd-testimonials-all .close-btn').on('click', function(){
    $('.cd-testimonials-all').removeClass('is-visible');
    $('.cd-testimonials-wrapper').removeAttr('style');
  });
  $(document).keyup(function(event){
    //check if user has pressed 'Esc'
      if(event.which=='27'){
        $('.cd-testimonials-all').removeClass('is-visible');  
      }
    });
    
  //build the grid for the testimonials modal page
  $('.cd-testimonials-all-wrapper').children('ul').masonry({
      itemSelector: '.cd-testimonials-item'
  });

  $(document).height(resizeDiv); 
  
    function resizeDiv() {      
      var cdTestimonialsAll = $('.cd-testimonials-all-wrapper ul').height();
      return cdTestimonialsAll;
    };



  /* $(window).bind("load resize scroll",function(e) {
    var y = $(window).scrollTop();

    $(".hero").filter(function() {
        return $(this).offset().top < (y + $(window).height()) &&
               $(this).offset().top + $(this).height() > y;
    }).css('background-position', '50% ' + parseInt(-y / 6) + 'px');
    }); */
  

  
  

  $('.grid-item').click(function (e) {
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    // do something while timeOut ticks ... 

    setTimeout(function(){
         window.location = goTo;
    },350);       
}); 


});
