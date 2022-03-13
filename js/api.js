// Api inicia aqui

/* Elegi una Api de clima, porque del listado de git hub me parecia que era la que mejor podia ser incluida en el proyecto, ya que a lo mejor, ves que esta fresquito y preguntas si hay una pasta o polenta o algo asi, me parecio pertinente aclararlo porque mi tuto me marco que podia ser un poco colgada la relacion */

// Definicion de variables
const formulario = document.getElementById("busquedaForm");
const input = document.getElementById("busquedaInput");
const resultados = document.querySelector(".displayClima .ciudades");
const apiKey = "36ef5c4464f0fd55ed52305e47db4443";

//Evento submit para detectar el pedido de clima y fetch asincronico
formulario.addEventListener("submit", e => {
    e.preventDefault();
    let entrada = input.value;
    
    const listaResultados = resultados.querySelectorAll(".displayClima .ciudades");
    const resultadosArray = Array.from(listaResultados);
    if (resultadosArray.length > 0) {
            resultadosArray.filter(el => {
            let content = "";
            if(entrada.includes(",")) {
                if(entrada.split(",")[1].length > 2) {
                    entrada = inputVal.split(",")[0];
                    content = el.querySelector(".city-name span").textContent.toLowerCase()
                }else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase()
                }}else {
                    content = el.querySelector(".city-name span").textContent.toLowerCase()
                } return 
            });
    };

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&appid=${apiKey}&units=metric`
    
    fetch(URL)
        .then(response => response.json())
        .then(data => {
        const { main, name, sys, weather } = data;
        let li = document.createElement("li");
        li.classList.add("city");
        const contenido = `<h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>, <p>${sys.country}. ${Math.round(main.temp)}°C</p></h2>`
        li.innerHTML = contenido;
        resultados.appendChild(li);
    })
    
    formulario.reset();
    input.focus();
    formulario.addEventListener("onreset", e=> {
        e.preventDefault();
        limpiarHTMLPrevio()
    })
});

function limpiarHTMLPrevio () {
    li.innerHTML = "";
}

