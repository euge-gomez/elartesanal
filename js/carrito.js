// Mi logica Ecommerce

//Iniciamos con reconocer las Cards que tienen los menus
const agregarAlCarro = document.querySelectorAll('.agregarMenu');
agregarAlCarro.forEach((agregarAlCarroBtn) => {
    agregarAlCarroBtn.addEventListener('click', agregarAlCarroClickeado);
});

//Marco como variable donde voy a poner el carro de compras
const carroContenedorMenus = document.getElementById('carrito');

//Y a buscar los distintos elementos que quiero poner en display en el carro
function agregarAlCarroClickeado(event) {
    const botonAgr = event.target;
    const menu = botonAgr.closest('.card-body');

    const menuTitle = menu.querySelector('.card-title').textContent;
    const menuDescr = menu.querySelector('.card-text').textContent;
    const menuPrice = menu.querySelector('.card-price').textContent;

    //Creamos el contenido del carrito
    const carroContenedor = document.createElement('div');
    const carroContenido = `
                            <div class="menuAgregado d-inline-flex justify-content-between">
                                <h5 class="menuTitle mx-2">${menuTitle}</h5>
                                <p>${menuDescr}</p>
                                <input class="mx-3 shopping-cart-quantity-input entradaCantidadCarro carroMenuCantidad" type="number" value="1">
                                <h5 class="menuPrice mx-2">${menuPrice}</h5>
                                <button class="mx-2 btn btn-danger botonEliminar" type="button">X</button>
                            </div>`;
    carroContenedor.innerHTML = carroContenido;
    carroContenedorMenus.append(carroContenedor);

    //Antes trabajamos para que no se dupliquen los divs del mismo pedido
    const menuEncabezado = carroContenedorMenus.getElementsByClassName('menuTitle');
    for(let i = 0; i < menuEncabezado.length; i++){
        if(menuEncabezado[i].innerText == menuTitle){
            let cantidadMenus = menuEncabezado[0].parentElement.querySelector('.entradaCantidadCarro');
            cantidadMenus.value++;
            actualizarTotalCarro()
           return;
        };} // No logro hacerlo funcionar.

    //Aca nombramos a la funcion que le da funcionalidad al boton X
    carroContenedor.querySelector('.botonEliminar').addEventListener('click', eliminarMenusCarro)
    
    //Aca vemos cuando cambian las cantidades del input
    carroContenedor.querySelector('.entradaCantidadCarro').addEventListener('change', cambiosCantidad);

    //Aca nombramos a la funcion que haremos por fuera para que se actualice el total
    actualizarTotalCarro();

    //Aca llevamos a local storage para que no pierda el carrito si se reinicia el navegador
    localStorage.setItem('carrito', JSON.stringify(carroContenedor))}

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
    totalCarro.innerHTML=`$${total}`;
}

//Aca definimos la funcion que le da funcionalidad al boton X
function eliminarMenusCarro(event) {
    const botonAccionado = event.target;
    botonAccionado.closest('.menuAgregado').remove();
    Toastify({
        text: "Producto Eliminado",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true,
        style: {
          background: "rgba(0,0,0,0.4)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    actualizarTotalCarro()
}

//Aca trabajaremos con la entrada de cantidades para que no haya menores que cero
function cambiosCantidad(event) {
    let entrada = event.target;
    entrada.value <= 0 && nonegativos();
    function nonegativos(){
        entrada.value = 1
    }
    nonegativos()
    actualizarTotalCarro()
}
//Aca recuperamos del local storage 
function recuperar() {
    let recuperoStorage = JSON.parse(localStorage.getItem('carrito'))
}
recuperar()
