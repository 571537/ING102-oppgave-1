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
        var content = "<h1 class='tittel'>Vår Problemstilling</h1>";
        //var x = xmlDoc.getElementsByTagName("txt");
        //document.write(x.getElementsByTagName("problemstilling").textContent);
        var problemstilling = "<p>" + xmlDoc.getElementsByTagName("problemstilling")[0].childNodes[0].nodeValue + "</p>";
        var problemstilling2 = "<p>" + xmlDoc.getElementsByTagName("problemstilling2")[0].childNodes[0].nodeValue + "</p>";
        var omProsjektet = "<p>" + xmlDoc.getElementsByTagName("omProsjektet")[0].childNodes[0].nodeValue + "</p>";
        var hensikt = "<p>" + xmlDoc.getElementsByTagName("prosjektHensikt")[0].childNodes[0].nodeValue + "</p>";
        var fremtid = "<p>" + xmlDoc.getElementsByTagName("fremtid")[0].childNodes[0].nodeValue + "</p>";
        var fremtid2 = "<p>" + xmlDoc.getElementsByTagName("fremtid2")[0].childNodes[0].nodeValue + "</p>";

        content = content + problemstilling + problemstilling2 + "<h4>Om prosjektet</h4>" + omProsjektet +
            "<h4>Hensikt</h4>" + hensikt + "<h4>Fremtidige utvidelser</h4>" + fremtid + fremtid2;

        document.getElementById("demo").innerHTML = content;
    }