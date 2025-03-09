document.addEventListener("DOMContentLoaded", async function() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Acceso denegado. Inicia sesión primero.");
        window.location.href = "../index.html"; // Redirige al login
        return;
    }

    // Verificar si el token es válido llamando a un endpoint protegido
    const response = await fetch("https://pregnant-celestina-diegoalonso-0cb5d237.koyeb.app/protected", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    if (!response.ok) {
        alert("Sesión expirada. Inicia sesión nuevamente.");
        localStorage.removeItem("token");
        window.location.href = "../index.html"; // Redirige al login
    }
});
