const botonGenerar = document.querySelector('#btnGenerar');

function GenerarFrase() {
    fetch(`https://api.quotable.io/random`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.querySelector("#api-phrase").textContent = data.content;
                document.querySelector("#api-author").textContent = data.author;
            } else {
                console.error("Error al generar frase");
                alert("Hubo un error al generar la frase.");
            }
        })
        .catch(error => console.error("Error al consultar la API:", error));
}
botonGenerar.addEventListener('click', GenerarFrase);