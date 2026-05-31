const botonBuscar = document.querySelector('#btnBuscar');       
const botonAleatorio = document.querySelector('#btnAleatorio'); 
const devolucionid = document.querySelector('#search-box');     

function buscarPersonaje(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                document.querySelector("#api-name").textContent = data.name;
                document.querySelector("#api-gender").textContent = data.gender;
                document.querySelector("#api-specie").textContent = data.species;
                document.querySelector("#api-status").textContent = data.status;
                document.querySelector("#picture-style").src = data.image;
            } else {
                console.error("Personaje no encontrado");
                alert("El ID ingresado no corresponde a ningún personaje válido.");
            }
        })
        .catch(error => console.error("Error al consultar la API:", error));
}
botonBuscar.addEventListener('click', function() {
    let id = devolucionid.value.trim();
    
    if (id === "") {
        ejecutarAleatorio();
    } else {
        buscarPersonaje(id);
    }
});

botonAleatorio.addEventListener('click', function() {
    ejecutarAleatorio();
});

function ejecutarAleatorio() {
    const idAleatorio = Math.floor(Math.random() * 826) + 1;
    devolucionid.value = idAleatorio;
    buscarPersonaje(idAleatorio);
}