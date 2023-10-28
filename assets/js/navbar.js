// Seu script existente para alterar a cor de fundo da barra de navegação
var lastScrollY = 0;

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');

    if (window.scrollY >= 200) {
        navbar.style.backgroundColor = '#ffffff'; // Altere para a cor desejada
    } else {
        navbar.style.backgroundColor = 'rgba(248,249,250,.75)';
    }
    lastScrollY = window.scrollY;
});