const botonGenerar = document.querySelector('#btnGenerar');

function GenerarFrase() {
    fetch(`https://api.quotable.io/random`)
        .then(response => {
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.content){
                document.querySelector("#api-phrase").textContent = data.content;
                document.querySelector("#api-author").textContent = data.author;
            } else {
                console.error("Error al generar frase");
                alert("Hubo un error al generar la frase.");
            }
        })
        .catch(error => {
        console.error("Error al consultar la API:", error);
        document.querySelector("#api-phrase").textContent = "Error de conexión con el servidor de frases. Ingresa a https://api.quotable.io/random y acepta los certificados";
        document.querySelector("#api-author").textContent = "N/A";
    })
}
botonGenerar.addEventListener('click', GenerarFrase);