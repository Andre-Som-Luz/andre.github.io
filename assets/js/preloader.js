// // Função para remover o preloader após o carregamento do site
// function removePreloader() {
//     const preloader = document.getElementById("preloader");
//     preloader.style.display = "none";
// }

// // Verifique se o site já foi carregado
// if (document.readyState === "complete") {
//     removePreloader();
// } else {
//     window.addEventListener("load", removePreloader);
// }

// Event listener para aguardar o carregamento completo da página
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // Esconde o preloader após o carregamento completo
    preloader.style.display = "none";
});