<script>
  function filter(currentTag){
    //console.log("currentTag = " + currentTag);
    // if tag is empty
    //
    if (currentTag == "" && window.location.pathname == "{{ include.url }}") {
      currentTag = "{{ include.event_default_tag }}";
    }
  
    // Setting visibility
    //
    var headerText = currentTag;
    if( !headerText || headerText == "{{ include.default_tag }}" ){
      headerText = "{{ include.all_header }}";
    }
    //console.log("{{ include.css_selector }}");
    $("{{ include.css_selector }} h1").first().text(headerText);
    $("{{ include.css_selector }} .filter-item").filter(function( index ) {
      return !$( this ).data("tags").indexOf(currentTag) > -1;
    })
    .hide("fast");
    var itemsToShow = $("{{ include.css_selector }} .filter-item").filter(function( index ) {
      return $( this ).data("tags").indexOf(currentTag) > -1;
    });
    itemsToShow.show("fast", function(){
      scrollToId();
    });
  
    // Highlighting links
    //
    $( "nav.event-nav a" ).filter(function( index ) {
      return $( this ).attr('href') != window.location.href.slice(window.location.origin.length);
    })
    .removeClass("active");
    $( "nav.event-nav a" ).filter(function( index ) {
      return $( this ).attr('href') == window.location.href.slice(window.location.origin.length);
    })
    .addClass("active");
  
    //Wrong tag or nothing found
    //
    if(itemsToShow.length == 0 && window.location.pathname == "{{ include.url }}"){
      //Output `nothing found` html here
      //We show every at once, hide unnecessary with styles.
      {% capture no_events_html %}
        {% include no_events.html %}
      {% endcapture %}
      {% assign no_events_html = no_events_html | strip | strip_newlines | replace: '"':'\"' %}
      $(".page-content").append("{{ no_events_html }}");
      //window.location.replace("/404.html");
    }
  }
  
  $(function() {
    currentTag = getParam('tag');
    filter(currentTag);
  });

  function scrollToId(){
    var scrollto = getParam('scrollto');
    if(scrollto){
      var body = $("html, body");
      if(body.find("#"+scrollto)){
        var scrollTo = $("#"+scrollto).offset().top;
        body.stop().animate({scrollTop: scrollTo }, '200', 'swing');
      }
    }
  }

</script>
