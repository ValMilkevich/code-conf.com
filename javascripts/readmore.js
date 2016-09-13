$( "a.read-more, a.read-less" ).click(function() {
  $(this).closest('.collapsible').toggleClass("expanded");
});
