

// Met à jour la valeur du slider en temps réel
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

slider.addEventListener('input', function() {
    sliderValue.textContent = slider.value;
});
//window.slider=slider; // Rendre la fonction disponible en HTML

// Basculer entre le mode clair et sombre
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#000';
    }
});

// Bouton pour afficher une alerte
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
    alert('Vous avez cliqué sur le bouton !');
});


