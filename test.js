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


// Remplacez l'importation du module node-fetch par la syntaxe CommonJS
const fetch = require('node-fetch').default || require('node-fetch');

const githubUrl = 'https://raw.githubusercontent.com/Nouhailaquahar/Style2/main/index.html';

fetch(githubUrl)
  .then(response => response.text())
  .then(htmlContent => {
    console.log(htmlContent); // Affiche le contenu HTML dans la console
  })
  .catch(error => console.error(error));

/*
// example.js
const button = document.createElement('button');
button.textContent = 'Mon Bouton';
document.body.appendChild(button);
*/

// custom-button.js
