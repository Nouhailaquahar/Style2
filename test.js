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

const fs = require('fs');

// Lire le contenu du fichier HTML
const htmlContent = fs.readFileSync('index.html', 'utf8');

// Afficher le contenu dans la console avec la balise <pre>
console.log(`<pre>${htmlContent}</pre>`);


/*
// example.js
const button = document.createElement('button');
button.textContent = 'Mon Bouton';
document.body.appendChild(button);
*/

// custom-button.js
