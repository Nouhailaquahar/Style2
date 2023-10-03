var customButton = document.createElement("button");
customButton.innerHTML = "Mon Bouton";
customButton.className = "custom-button";

// Définissez l'action à effectuer lorsque le bouton est cliqué
customButton.addEventListener("click", function() {
    // Ajoutez ici l'action que vous souhaitez exécuter lors du clic sur le bouton
    alert("Le bouton a été cliqué !");
});

// Ajoutez le bouton à la page d'accueil
var homePage = document.getElementById("page-home");
homePage.appendChild(customButton);
