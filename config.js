document.addEventListener("DOMContentLoaded", function() {
    // Créez une requête XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurez la requête avec l'URL du fichier distant
    var url = "https://raw.githubusercontent.com/Nouhailaquahar/Style2/main/custom.js";
    xhr.open("GET", url, true);

    // Configurez les en-têtes CORS pour permettre l'accès à Jenkins
    xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080/");

    // Gérez la réponse lorsque la requête est terminée
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Traitez la réponse ici
            var response = xhr.responseText;
            console.log(response);
        }
    };

    // Envoyez la requête
    xhr.send();
});
