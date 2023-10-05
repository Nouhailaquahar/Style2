/*document.addEventListener("DOMContentLoaded", function() {
    var customButton = document.createElement("button");
    customButton.textContent = "Mon Bouton";
    customButton.onclick = function() {
        alert("Bouton personnalisé cliqué !");
    };
    var header = document.querySelector(".header");
    header.appendChild(customButton);
});

console.log("c'est fichier test.js");*/
const puppeteer = require('puppeteer');

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
console.log("c'est fichier test.js")
