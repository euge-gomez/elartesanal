const formulario = document.getElementById("busquedaForm");
const input = document.getElementById("busquedaInput");
const resultados = document.querySelector(".displayClima .ciudades");
const apiKey = "36ef5c4464f0fd55ed52305e47db4443";

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
                } return content == entrada.toLowerCase();
            });
    };

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${entrada}&appid=${apiKey}&units=metric`

    fetch(URL)
        .then(response => response.json())
        .then(data => {
        const { main, name, sys, weather } = data;
        const li = document.createElement("li");
        li.classList.add("city");
        const contenido = `<h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>, <p>${sys.country}. ${Math.round(main.temp)}°C</p></h2>`
        li.innerHTML = contenido;
        resultados.appendChild(li);
    })
    formulario.reset();
    input.focus();
});

