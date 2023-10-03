// Créez un élément div pour contenir le bouton
var customButtonContainer = document.createElement("div");

// Injectez le code HTML du bouton dans l'élément div
customButtonContainer.innerHTML = `
    <button class="custom-button">Mon Bouton</button>
`;

// Ajoutez l'élément div à la page d'accueil
var homePage = document.getElementById("page-home");
homePage.appendChild(customButtonContainer);
