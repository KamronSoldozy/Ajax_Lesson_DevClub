(function() {
  var httpRequest;
  document.getElementById("ajaxButton1").onclick = function() { makeRequest('1.xml'); };
  document.getElementById("ajaxButton2").onclick = function() { makeRequest('2.xml'); };
  document.getElementById("ajaxButton3").onclick = function() { makeRequest('3.xml'); };
  document.getElementById("cart").onclick = function() { newfunctionihaventwrittenthatshouldsumthepricesoftheotherstuff(); };
  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
 
     if (httpRequest.status === 200) {
        var xmldoc = httpRequest.responseXML;
        var root_node = xmldoc.getElementsByTagName('root').item(0);  //how to access response text in XML files
        alert(root_node.firstChild.data);
      }
       else {
        alert('There was a problem with the request.');
      }
    }
  }
})();

