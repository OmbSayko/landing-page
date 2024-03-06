//Evento para NavBar
const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    menu.classList.add("visibility");
});

close.addEventListener("click", () => {
    menu.classList.remove("visibility");
})

// Evento para active-a-h
function setActiveLink(element) {
    // Remover la clase active-a-h de todos los enlaces
    var links = document.querySelectorAll('.hamburger-menu a');
    links.forEach(link => {
        link.classList.remove('active-a-h');
    });

    // Agregar la clase active-a-h solo al enlace clicado
    element.classList.add('active-a-h');
}

// Evento para Donations
function showByCountry(country) {
    // Obtener todos los contenedores donations-main
    var donationsMainContainers = document.querySelectorAll('.donations-main');
    donationsMainContainers.forEach(container => {
        // Ocultar todos los contenedores
        container.style.display = 'none';
    });

    // Obtener todos los elementos de ancla
    var donationAnchors = document.querySelectorAll('.donations-menu ul li a');

    // Eliminar la clase 'real-active' de todos los elementos de ancla
    donationAnchors.forEach(anchor => {
        anchor.classList.remove('real-active');
    });

    // Mostrar los contenedores según el país seleccionado
    if (country === 'Todos') {
        showAllContainers(); 
        // Llamar a la función para mostrar todos los contenedores
    } else if (country === 'México') {
        showContainers([0, 1, 2]);
    } else if (country === 'Estados Unidos') {
        showContainers([3]);
    } else if (country === 'Alemania') {
        showContainers([4]);
    } else if (country === 'Colombia') {
        showContainers([5]);
    } else if (country === 'España') {
        showContainers([6, 7, 8]);
    }

    // Agregar la clase 'real-active' al elemento de ancla correspondiente
    event.target.classList.add('real-active');
}

function showContainers(indices) {
    // Mostrar los contenedores especificados por sus índices
    indices.forEach(index => {
        var container = document.querySelectorAll('.donations-main')[index];
        if (container) {
            container.style.display = 'block';

            // Agregar la clase para contenedores individuales o dobles si es necesario
            if (indices.length <= 2) {
                container.classList.add('single-or-double-container');
            } else {
                container.classList.remove('single-or-double-container'); 
                // Asegurarse de eliminar la clase si hay más de dos contenedores visibles
            }
        }
    });
}

function showAllContainers() {
    // Mostrar todos los contenedores
    var donationsMainContainers = document.querySelectorAll('.donations-main');
    donationsMainContainers.forEach(container => {
        container.style.display = 'block';
    });
}