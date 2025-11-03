const navegacion = document.getElementById("navegacion");

window.onload = function() {
    document.getElementById("desplegable").addEventListener("click", function() {
        if (navegacion.style.display === "none") {
            navegacion.style.display = "flex";
        } else {
            navegacion.style.display = "none";
        }
    });
}