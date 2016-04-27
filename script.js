(function() {
  var httpRequest;
  document.getElementById("ajaxButton").onclick = function() { makeRequest('test.xml'); };

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
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();

