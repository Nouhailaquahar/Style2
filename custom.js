// Créez un élément div pour contenir le bouton
var customButtonContainer = document.createElement("div");

// Injectez le code HTML du bouton dans l'élément div
customButtonContainer.innerHTML = `
        <div id="custom-button-container" style="position: absolute; top: 0; left: 0; right: 0; text-align: center;">
            <button class="custom-button">Mon Bouton</button>
        </div>
`;

// Ajoutez l'élément div à la page d'accueil
var homePage = document.getElementById("page-home");
homePage.appendChild(customButtonContainer);
