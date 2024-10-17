"use strict";
function controleer() {
    let waarde = document.getElementById("invoer").value;
    if (waarde == "") {
        document.getElementById("uitvoer").innerHTML = "niks ingevuld";
    }
    else {
        document.getElementById("uitvoer").innerHTML = "hallo," + waarde;
    }
}