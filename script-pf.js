const botonBuscar = document.querySelector('#btnBuscar');       
const botonAleatorio = document.querySelector('#btnAleatorio'); 
const devolucionid = document.querySelector('#search-box');     

function buscarPersona(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                document.querySelector("#api-name-people").textContent = data.name;
                document.querySelector("#api-email-people").textContent = data.email;
                document.querySelector("#api-phone-people").textContent = data.phone;
            } else {
                console.error("Persona no encontrada");
                alert("El ID ingresado no corresponde a ninguna persona valida.");
            }
        })
        .catch(error => console.error("Error al consultar la API:", error));
}
botonBuscar.addEventListener('click', function() {
    let id = devolucionid.value.trim();
    
    if (id === "") {
        ejecutarAleatorio();
    } else {
        buscarPersona(id);
    }
});

botonAleatorio.addEventListener('click', function() {
    ejecutarAleatorio();
});

function ejecutarAleatorio() {
    const idAleatorio = Math.floor(Math.random() * 10) + 1;
    devolucionid.value = idAleatorio;
    buscarPersona(idAleatorio);
}