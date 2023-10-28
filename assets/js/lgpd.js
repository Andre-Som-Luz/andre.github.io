// Recupere a referência para a div e o botão
const uniqueDiv = document.getElementById("uniqueDiv");
const closeButton = document.getElementById("closeButton");

// Verifique se já foi exibida antes (usando um cookie)
const hasBeenShown = document.cookie.includes("uniqueDivShown=true");

// Se não foi exibida antes, mostre a div
if (!hasBeenShown) {
    uniqueDiv.style.display = "block";
}

// Adicione um ouvinte de evento ao botão para fechar a div
closeButton.addEventListener("click", () => {
    uniqueDiv.style.display = "none";
    
    // Defina um cookie para indicar que a div foi exibida
    document.cookie = "uniqueDivShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
});