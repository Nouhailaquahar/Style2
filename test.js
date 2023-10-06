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

console.log("Ici c'est fichier test.js");
// Exemple de code JavaScript pour ajouter un bouton
const button = document.createElement('button');
button.textContent = 'Mon Bouton';
button.classList.add('custom-button');
button.addEventListener('click', function() {
    alert('Le bouton a ete clique !');
});

// Ajouter le bouton à l'interface Jenkins
const jenkinsHeader = document.querySelector('#header'); // ou tout autre élément
jenkinsHeader.appendChild(button);

