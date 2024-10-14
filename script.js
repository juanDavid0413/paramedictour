function mostrarDetalles(plan) {
    alert(`Detalles sobre el ${plan}: Este es un excelente plan para disfrutar!`);
}


document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.style.opacity = 1;
    });
});

window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        button.style.display = "block"; 
    } else {
        button.style.display = "none"; 
    }
};


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleModo() {
    const body = document.body;
    body.classList.toggle('modo-oscuro');

    // Cambiar el texto del botón según el modo
    const boton = document.getElementById('modoOscuro');
    if (body.classList.contains('modo-oscuro')) {
        boton.innerHTML = '🌞'; // Cambia el ícono al modo claro
    } else {
        boton.innerHTML = '🌙'; // Cambia el ícono al modo oscuro
    }
}
