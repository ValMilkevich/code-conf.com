
function getParamAsObject(){
  var params = location.search.substr(location.search.indexOf("?")+1);
  return JSON.parse('{"' + decodeURI(params).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

function getParam ( key )
{
  var obj = getParamAsObject();
  return eval('obj.'+key);
}



function resizeIframe(iframe) {
    // Use it to have iframes dynamically set height on load.
    // <iframe onload="resizeIframe(this)" ...>
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}
