
//Funksjon som laster inn tekst fra XML fil, denne vil bare fungere når sidene er lastet opp på en server
//Se linken til HVL serveren for å se resultatet
function loadDoc() {
        document.getElementById("demo").style.display = "block";
        document.getElementById("loadDoc").style.display = "none";
        document.getElementById("hideDoc").style.display = "block";
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
        var testContent = "<h1 class='tittel'>Vår problemstilling</h1>";
        var x = xmlDoc.getElementsByTagName("tag");

        for (i=0; i<x.length; i++){
            if (x[i].getElementsByTagName("tittel")[0].childNodes[0].nodeValue.length>2){
                testContent = testContent + "<h4>" + x[i].getElementsByTagName("tittel")[0].childNodes[0].nodeValue + "</h4>"
                    + "<p>" + x[i].getElementsByTagName("tekst")[0].childNodes[0].nodeValue + "</p>";
            }else {
                testContent = testContent + "<p>" + x[i].getElementsByTagName("tekst")[0].childNodes[0].nodeValue + "</p>";
            }

        }
        document.getElementById("demo").innerHTML = testContent;
    }

function seBildet() {
        document.getElementById("ganttContainer").style.display = "block";
        document.getElementById("seBilde").style.display = "none";
        document.getElementById("lukkBilde").style.display = "block";
}
function lukkBildet() {
    document.getElementById("ganttContainer").style.display = "none";
    document.getElementById("seBilde").style.display = "block";
    document.getElementById("lukkBilde").style.display = "none";
}
function hideDoc() {
    document.getElementById("demo").style.display = "none";
    document.getElementById("loadDoc").style.display = "block";
    document.getElementById("hideDoc").style.display = "none";

}
