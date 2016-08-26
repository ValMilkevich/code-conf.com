jQuery(function() {
  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() > $(document).height() - $("footer.site-footer").height() - 10) {
         $('.include-newsletter').addClass('fixed');
     }else{
         $('.include-newsletter').removeClass('fixed');
     }
  });
});
