//Aca llamo al contador del carrito
const numeritoCarro = document.getElementById('numerito');

//Iniciamos con reconocer las Cards que tienen los menus
const agregarAlCarro = document.querySelectorAll('.agregarMenu');
agregarAlCarro.forEach((agregarAlCarroBtn) => {
    agregarAlCarroBtn.addEventListener('click', agregarAlCarroClickeado);
});

//Marco como variable donde voy a poner el carro de compras
const carroContenedorMenus = document.getElementById('carrito');

//Aca le damos funcion al boton finalizar compra
const finButton = document.querySelector('.finalizarBtn');
finButton.addEventListener('click', finalizarCompra);

//Y a buscar los distintos elementos que quiero poner en display en el carro

class MenuElejido {
    constructor (menuTitle, menuDescr, menuPrice) {
        this.menuTitle = menuTitle;
        this.menuDescr = menuDescr;
        this.menuPrice = menuPrice;
    }
}

let menuAlmacenado = [];

function agregarAlCarroClickeado(event) {
    const botonAgr = event.target;
    const menu = botonAgr.closest('.card-body');

    const menuTitle = menu.querySelector('.card-title').textContent;
    const menuDescr = menu.querySelector('.card-text').textContent;
    const menuPrice = menu.querySelector('.card-price').textContent;

    menuAlmacenado.push(new MenuElejido(menuTitle, menuDescr, menuPrice))

    //Aca le alimentamos a la funcion principal sus parametros
    agregarItemAlCarro(menuTitle, menuDescr, menuPrice)
}

function agregarItemAlCarro(menuTitle, menuDescr, menuPrice) {
     //Antes trabajamos para que no se dupliquen los divs del mismo pedido
     const menuEncabezado = carroContenedorMenus.getElementsByClassName('menuTitle');
     for(let i = 0; i < menuEncabezado.length; i++){
         if(menuEncabezado[i].innerText == menuTitle){
             let cantidadMenus = menuEncabezado[0].parentElement.querySelector('.entradaCantidadCarro');
             cantidadMenus.value++;
             actualizarTotalCarro();
            return;
         };
     } 

     

    //Creamos el contenido del carrito
    let carroContenedor = document.createElement('tr');
    carroContenedor.classList.add('menuAgregado')
    const carroContenido = `
                                <td class="menuTitle mx-2">${menuTitle}</td>
                                <td><p>${menuDescr}</p></td>
                                <td><input class="mx-3  entradaCantidadCarro carroMenuCantidad" type="number" value="1"></td>
                                <td class="menuPrice mx-2"><h5 >${menuPrice}</h5></td>
                                <td><button class="mx-2 btn btn-danger botonEliminar" type="button">X</button></td>`;
    carroContenedor.innerHTML = carroContenido;
    carroContenedorMenus.append(carroContenedor);

    //Aca nombramos a la funcion que le da funcionalidad al boton X
    carroContenedor.querySelector('.botonEliminar').addEventListener('click', eliminarMenusCarro)
    
    //Aca vemos cuando cambian las cantidades del input
    carroContenedor.querySelector('.entradaCantidadCarro').addEventListener('change', cambiosCantidad);

    //Aca nombramos a la funcion que haremos por fuera para que se actualice el total
    actualizarTotalCarro();

    //Almacenado
    localStorage.setItem('carrito', JSON.stringify(menuAlmacenado))
    
}
   
//Aca la definimos a la funcion actualizar el total del carro
function actualizarTotalCarro(){
    let total = 0;

    const totalCarro = document.querySelector('.carro-total');
    const carrosMenusAgregados = document.querySelectorAll(".menuAgregado");

    carrosMenusAgregados.forEach(menuAgregado => {
       const carroPrecioMenuAgregado = menuAgregado.querySelector('.menuPrice');
    const carroPrecioAgregado = Number(carroPrecioMenuAgregado.textContent.replace('$', ''));
    const carroCantidadMenuAgregada = menuAgregado.querySelector('.entradaCantidadCarro');
    const carroCantidadAgregada = Number(carroCantidadMenuAgregada.value);
  
    total = total + carroPrecioAgregado * carroCantidadAgregada;
    
    totalCarro.innerHTML=`$${total}`;
    
    });
    totalCarro.innerHTML = `$${total}`
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
    const entrada = event.target;
    entrada.value <= 0 ? (entrada.value = 1) : null;
    Toastify({
        text: "Cantidad cambiada",
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
    actualizarTotalCarro();
}
//Aca recuperamos del local storage 
function recuperar() {
    let menuLS = JSON.parse(localStorage.getItem('carrito')) || [];
    menuLS.forEach(item => {
        agregarItemAlCarro(item.menuTitle, item.menuDescr, item.menuPrice)
    })
}
recuperar()

//Aca finalizamos la compra
function finalizarCompra() {
    carroContenedorMenus.innerHTML = `Compra finalizada`;
    let contenidoModal = document.createElement('p');
    const modal = document.getElementById('modal-body');
    let bodyModal = `Muchas Gracias por tu pedido, lo estamos procesando y lo recibiras en tu domicilio a la hora pactada. Buen provecho! Y que disfrutes la experiencia Artesanal`;
    contenidoModal.innerHTML = bodyModal;
    modal.appendChild(contenidoModal);
    actualizarTotalCarro();
}
