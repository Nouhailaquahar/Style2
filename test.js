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


import fetch from 'node-fetch'; // Importation ESM
const nodeFetch = require('node-fetch'); // Importation CommonJS

const githubUrl = 'https://raw.githubusercontent.com/Nouhailaquahar/Style2/main/index.html';

if (fetch.default) {
  // Pour les modules ESM, utilisez le module ESM
  fetch(githubUrl)
    .then(response => response.text())
    .then(htmlContent => {
      console.log(htmlContent); // Affiche le contenu HTML dans la console
    })
    .catch(error => console.error(error);
} else {
  // Pour les modules CommonJS, utilisez le module CommonJS
  nodeFetch(githubUrl)
    .then(response => response.text())
    .then(htmlContent => {
      console.log(htmlContent); // Affiche le contenu HTML dans la console
    })
    .catch(error => console.error(error);
}

/*
// example.js
const button = document.createElement('button');
button.textContent = 'Mon Bouton';
document.body.appendChild(button);
*/

// custom-button.js
