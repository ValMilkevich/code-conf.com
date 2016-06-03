<script>
  function filter(currentTag){
  
    // if hash is empty
    //
    if (currentTag == "" && window.location.pathname == "{{ include.url }}") {
      currentTag = "{{ include.event_default_tag }}";
      //console.log("currentTag = " + currentTag);
    }
  
    // Setting visibility
    //
    var headerText = currentTag;
    if( !headerText || headerText == "{{ include.default_tag }}" ){
      headerText = "{{ include.all_header }}";
    }
    $("{{ include.css_selector }} h1").text(headerText);
    $("{{ include.css_selector }} .filter-item").filter(function( index ) {
      return !$( this ).data("tags").indexOf(currentTag) > -1;
    })
    .hide("fast");
    var itemsToShow = $("{{ include.css_selector }} .filter-item").filter(function( index ) {
      return $( this ).data("tags").indexOf(currentTag) > -1;
    });
    itemsToShow.show("fast");
  
    // Highlighting links
    //
    $( "#search a" ).filter(function( index ) {
      return $( this ).text() != currentTag;
    })
    .removeClass("active");
    $( "#search a" ).filter(function( index ) {
      return $( this ).text() == currentTag;
    })
    .addClass("active");
  
    // Wrong hash
    //
    if(itemsToShow.length == 0 && window.location.pathname == "{{ include.url }}"){
      //Output `nothing found` html here
      //window.location.replace("/404.html");
    }
  }
  
  $(window).on('hashchange', function() {
    currentTag = unescape(window.location.hash.slice(1));
    filter(currentTag);
  
    //scroll to h1
    //var body = $("html, body");
    //var scrollTo = $("{{ include.css_selector }} h1").offset().top;
    //body.stop().animate({scrollTop: scrollTo }, '200', 'swing');
  });
  
  $(function() {
    currentTag = unescape(window.location.hash.slice(1));
    filter(currentTag);
  });
</script>
