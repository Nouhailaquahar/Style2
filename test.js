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

/*
// example.js
const button = document.createElement('button');
button.textContent = 'Mon Bouton';
document.body.appendChild(button);
*/

// custom-button.js
(function () {
    var customButton = document.createElement('button');
    customButton.textContent = 'Mon Bouton';
    customButton.onclick = function () {
        alert('Le bouton a ete clique.');
    };

    // Sélectionnez l'emplacement où vous souhaitez ajouter le bouton
    var targetElement = document.getElementById('side-panel');
    targetElement.appendChild(customButton);
})();
