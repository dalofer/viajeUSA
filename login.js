document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evitar recargar la página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://pregnant-celestina-diegoalonso-0cb5d237.koyeb.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Login exitoso!");
        localStorage.setItem("token", data.access_token); // Guardar el token
        window.location.href = "pages/viajeusa.html"; // Redirigir a la página protegida
    } else {
        alert("Error: " + data.detail);
    }
});
