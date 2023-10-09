/*document.addEventListener("DOMContentLoaded", function() {
    var customButton = document.createElement("button");
    customButton.textContent = "Mon Bouton";
    customButton.onclick = function() {
        alert("Bouton personnalisé cliqué !");
    };
    var header = document.querySelector(".header");
    header.appendChild(customButton);
});
*/
console.log("Ce message vient du fichier test.js");
const fetch = require('node-fetch');

fetch("https://raw.githubusercontent.com/Nouhailaquahar/Style2/main/index.html")
    .then(response => response.text())
    .then(data => console.log(data));


/*
// example.js
const button = document.createElement('button');
button.textContent = 'Mon Bouton';
document.body.appendChild(button);
*/

// custom-button.js
