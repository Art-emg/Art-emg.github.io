window.onload = function() {
    document.title = window.location.hash.substr(1);
    document.getElementById('name').innerHTML = window.location.hash.substr(1);
    loadXMLDoc();
  };

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      myFunction(this);
    }
  };

  xmlhttp.open("GET", "http://img.ignio.com/r/export/utf/xml/daily/com.xml", true);
  xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');

  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("today");
  for (i = 0; i< x.length; i++) {
    txt += x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}