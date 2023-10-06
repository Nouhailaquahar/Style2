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

/*const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com'); // Remplacez par l'URL de la page à modifier
  await page.evaluate(() => {
    const button = document.createElement('button');
    button.textContent = 'Nouveau Bouton';
    document.body.appendChild(button);
  });
  await browser.close();
})();
console.log("c'est fichier test.js")*/

console.log("Ce message vient du fichier test.js");

const fs = require('fs');
$(document).ready(function() {
    var button = $('<button>Mon Bouton</button>');
    button.click(function() {
        // Code à exécuter lorsque le bouton est cliqué
        alert('Le bouton a ete clique !');
    });
    $('body').append(button);
});

