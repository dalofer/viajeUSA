document.addEventListener("DOMContentLoaded", async function() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Acceso denegado. Inicia sesión primero.");
        window.location.href = "../index.html"; // Redirige al login
        return;
    }

    try {
        const response = await fetch("https://pregnant-celestina-diegoalonso-0cb5d237.koyeb.app/protected", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        if (!response.ok) {
            throw new Error("Sesión expirada o no válida");
        }

        const data = await response.json();
        document.getElementById("welcomeMessage").innerText = `Bienvenido, ${data.message}`;
    } catch (error) {
        alert(error.message);
        localStorage.removeItem("token");
        window.location.href = "../index.html"; // Redirige al login
    }
});

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
}
