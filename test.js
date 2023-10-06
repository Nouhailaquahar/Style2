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
const fs = require('fs');

// Le code HTML à générer
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Titre de la page</title>
</head>
<body>
    <div id="content">
        <!-- Votre contenu ici -->
    </div>
    <script src="votre_script.js"></script>
</body>
</html>
`;

// Ajouter un bouton dans le code HTML
const boutonHtml = '<button>Nouveau Bouton</button>';
const htmlAvecBouton = htmlContent.replace('<div id="side-panel">', '<div id="side-panel">' + boutonHtml);

// Écrire le code HTML dans un fichier
fs.writeFileSync('testDiv.html', htmlAvecBouton);
