//Iniciamos con reconocer las Cards que tienen los menus
const agregarAlCarro = document.querySelectorAll('.agregarMenu');
agregarAlCarro.forEach((agregarAlCarroBtn) => {
    agregarAlCarroBtn.addEventListener('click', agregarAlCarroClickeado);
});

//Marco como variable donde voy a poner el carro de compras
const carroContenedorMenus = document.getElementById('carrito')

//Ahora comienzo a hacer funcionar los botones
//Y a buscar los distintos elementos que quiero poner en display en el carro
function agregarAlCarroClickeado(event) {
    const botonAgr = event.target;
    const menu = botonAgr.closest('.card-body');
    
    const menuTitle = menu.querySelector('.card-title').textContent;
    const menuDescr = menu.querySelector('.card-text').textContent;
    const menuPrice = menu.querySelector('.card-price').textContent;
    
    //Aca trabajamos para que no se dupliquen los divs del mismo pedido
    const menuEncabezado = carroContenedorMenus.getElementsByClassName('menuTitle');
    for(let i = 0; i < menuEncabezado.length; i++){
        if(menuEncabezado[i].innerText == menuTitle){
            let cantidadMenus = menuEncabezado[i].innerText.parentElement.querySelector('.entradaCantidadCarro');
            console.log(cantidadMenus); 
            cantidadMenus.value++;
            return;//No me muestra desde el if :(
        }; 
        // No logro hacerlo funcionar. Seguire intentando y podré!
    };

    //Creamos como cargar el carrito
    const carroContenedor = document.createElement('div');
    const carroContenido = `
                            <div class="menuAgregado d-inline-flex justify-content-between">
                                <h5 class="menuTitle mx-2">${menuTitle}:  </h5>
                                <p>${menuDescr}</p>
                                <input class="mx-3 shopping-cart-quantity-input entradaCantidadCarro carroMenuCantidad" type="number" value="1">
                                <h5 class="menuPrice mx-2">${menuPrice}</h5>
                                <button class="mx-2 btn btn-danger botonEliminar" type="button">X</button>
                            </div>`;
    carroContenedor.innerHTML = carroContenido;
    carroContenedorMenus.append(carroContenedor);
    
    //Aca nombramos a la funcion que le da funcionalidad al boton X
    carroContenedor.querySelector('.botonEliminar').addEventListener('click', eliminarMenusCarro)
    
    //Aca vemos cuando cambian las cantidades del input
    carroContenedor.querySelector('.entradaCantidadCarro').addEventListener('change', cambiosCantidad);

    //Aca nombramos a la funcion que haremos por fuera para que se actualice el total
    actualizarTotalCarro();

    //Aca llevamos a local storage para que no pierda el carrito si se reinicia el navegador
    localStorage.setItem('carrito', JSON.stringify(carroContenido))

}

//Aca la definimos a la funcion actualizar el total del carro
function actualizarTotalCarro(){
    let total = 0;
    const totalCarro = document.querySelector('.carro-total');
    const carrosMenusAgregados = document.querySelectorAll(".menuAgregado")
    carrosMenusAgregados.forEach(menuAgregado => {
       const carroPrecioMenuAgregado = menuAgregado.querySelector('.menuPrice');
    const carroPrecioAgregado = parseFloat(carroPrecioMenuAgregado.textContent.substring(2));
    const carroCantidadMenuAgregada = menuAgregado.querySelector('.entradaCantidadCarro')
    const carroCantidadAgregada = parseInt(carroCantidadMenuAgregada.value);
    total = total + carroPrecioAgregado * carroCantidadAgregada;
    });
    totalCarro.innerHTML=`${total}`;
}

//Aca definimos la funcion que le da funcionalidad al boton X
function eliminarMenusCarro(event) {
    const botonAccionado = event.target;
    botonAccionado.closest('.menuAgregado').remove();
    actualizarTotalCarro()
}

//Aca trabajaremos con la entrada de cantidades para que no haya menores que cero
function cambiosCantidad(event) {
    const entrada = event.target;
    if(entrada.value <= 0) {
        entrada.value = 1;
    }
    actualizarTotalCarro()
}

//Aca recuperamos del local storage 
function recuperar() {
    let recuperoStorage = JSON.parse(localStorage.getItem('carrito'))
}
recuperar()

/*Bueno creo que mi complicacion mas grande estuvo en el hecho de que no pude nunca trabajar con los cards iniciales como hacia Emi entonces:
google y vi videos e intente replicar funcionalidades con lo que encontraba. No me salio del todo, no logre que no se repitienran las lineas y 
no logro que el localStorage guarde mas de un contenido por ende no recuperaria mas que el primero. Creo que la base la entiendo, se aceptan +
recomendaciones de videos para ver porque claramente no me alcanza con las clases */
