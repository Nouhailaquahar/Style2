const button = document.createElement('button');
button.textContent = 'Nouveau Bouton';
button.addEventListener('click', function() {
    alert('Le bouton a ete clique !');
});

const sidePanel = document.getElementById('side-panel');
sidePanel.appendChild(button);
