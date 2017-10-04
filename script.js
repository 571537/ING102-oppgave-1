function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };
        xhttp.open("GET", "data.xml", true);
        xhttp.send();
    }
    function myFunction(xml) {
        var i;
        var xmlDoc = xml.responseXML;
        var content = "<h3>Prosjekt</h3>";
        var x = xmlDoc.getElementsByTagName("txt");
        document.write(x.getElementsByTagName("problemstilling").textContent);
        //content = content + "<p>x.getElementsByTagName("problemstilling").textContent</p>";
        document.getElementById("demo").innerHTML = content;
    }