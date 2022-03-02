//Mas carritos de compras

let arrayExtras = [
{id:1, tipo:"Pizza", subtipo:"Clasica", porciones:"8 porciones", precio:350, img:"../images/pizza-de-muzzarella-sabores.jpg", cantidad:1},
{id:2, tipo:"Pizza", subtipo:"Especial", porciones:"8 porciones", precio:450, img:"../images/pizza-especial.jpg", cantidad:1},
{id:3, tipo:"Pata", subtipo:"Flambeada", porciones:"10 personas", precio:2500, img:"../images/pataflambeada.jpg", cantidad:1},
{id:4, tipo:"Picada", subtipo:"Cervecera", porciones:"4 personas", precio:800, img:"../images/picada.jpg", cantidad:1},
{id:5, tipo:"Catering", subtipo:"Salado", porciones:"10 personas", precio:3500, img:"../images/cateringSalado.jpg", cantidad:1}
];

//Carro array vacio
let carritoExtras = [];

// Declaraciones de las relaciones con el html
//Donde iran las cards de productos
const contenedorCardsExtras = document.getElementById('extrasCards');
//Donde iran una vez elegidos
const seleccionadosExtras = document.getElementById('carroExtras');
//Aca llamo al contador del carrito
const numeritoCarro = document.getElementById('numerito');
//Llamamos al total del carro
const carroTotal = document.getElementById('total-extras');
//Llamamos a la etiqueta select para poder hacer la busqueda
const opcionesExtras = document.getElementById('seleccionarOpcion');
//Llamador de opciones elegidas
const elegidosExtras = document.getElementById('eleccion');

//Hacemos funcionar las selecciones de Extras
opcionesExtras.addEventListener('change', ()=>{
    if (opcionesExtras.value == 'Todos'){
        armandoExtras(arrayExtras)
    }else {
        armandoExtras(arrayExtras.filter(el=>el.subtipo == opcionesExtras.value))
        console.log(arrayExtras.filter(el=>el.subtipo == opcionesExtras.value))
    }
});

//Evento de buscar 
elegidosExtras.addEventListener('input', ()=>{
    if(elegidosExtras.value == "") {
        armandoExtras(arrayExtras)
    }else {armandoExtras(arrayExtras.filter(el=>el.tipo.toLowerCase().includes(elegidosExtras.value.toLowerCase())));
    }
  
});

//Display de cards desde el array de Extras
armandoExtras(arrayExtras)
function armandoExtras(array){
  contenedorCardsExtras.innerHTML ='';
  for(const menuExtra of array) {
    let div = document.createElement('div')
    div.classList.add('menuExtra')
    div.classList.add('row')
    div.classList.add('d-*-inline-flex')
    div.innerHTML += `
                <div class="card col-4">
                    <div class="card-image">
                        <img class="img-fluid" src=${menuExtra.img}>
                        <h3 class="card-title">${menuExtra.tipo} - ${menuExtra.subtipo}</h3>
                        <a id="botonAgregar${menuExtra.id}"><img class="btn-primary" src="../images/059-cart.png"></a>
                    </div>
                    <div class="card-content">
                        <p>Porciones: ${menuExtra.porciones}</p>
                        <h3> $${menuExtra.precio}</h3>
                    </div>
                </div> `
    contenedorCardsExtras.append(div);

    //Aca trabajamos con el boton que cargara el menu extra al carro
    let clickAgregar = document.getElementById(`botonAgregar${menuExtra.id}`);
    clickAgregar.addEventListener('click', ()=>{
      cargarExtra(menuExtra.id)
    });
  }
}
//Aca le indicamos que hacer cuando alguien selecciona un menu extra
function cargarExtra(id) {
    //Lo primero que tratamos es que si el usuario aprieta multiples veces el boton no se multipliquen los renglones
    let multiplicado = carritoExtras.find(item => item.id == id)
    if(multiplicado){
        multiplicado.cantidad = multiplicado.cantidad + 1
        document.getElementById(`cantidad${multiplicado.id}`).innerHTML = `<p id= cantidad${multiplicado.id}>Cantidad:${multiplicado.cantidad}</p>`
        actualizarCarroExtras() 
    }else{ 
        //Aca le decimos que arme el carrito con lo que el usuario pide
        let agregarExtra = arrayExtras.find(elemento => elemento.id == id)
        carritoExtras.push(agregarExtra)
        actualizarCarroExtras()
        let carro = document.createElement('div')
        carro.className = 'extraEnCarro'
        carro.innerHTML =`
                    <div class="card align-items-center">
                        <h5 class="mx-3">${agregarExtra.tipo} ${agregarExtra.subtipo} - Precio: $${agregarExtra.precio}</h5>
                        <p class="mx-4" id="cantidad${agregarExtra.id}">Cantidad:${agregarExtra.cantidad}</p>
                        <button id=botonEliminar${agregarExtra.id} class="btn-primary w-25"><img src="../images/272-cross.png"></button>
                    </div>
        `
        seleccionadosExtras.append(carro)
        //Aca trabajamos en darle la chance al usuario a eliminar productos de su carro
        let botonEliminarExtras = document.getElementById(`botonEliminar${agregarExtra.id}`)
        botonEliminarExtras.addEventListener('click',()=>{
            botonEliminarExtras.parentElement.remove()                         
            carritoExtras = carritoExtras.filter(elemento => elemento.id != agregarExtra.id)
            actualizarCarroExtras()
            //Aca le pedimos que nos guarde el array del carrito seleccionado cuando eliminen
            localStorage.setItem('carrito', JSON.stringify(carritoExtras))
        })
    }
    // Aca le pedimos que guarde el array del carrito 
    localStorage.setItem('carrito', JSON.stringify(carritoExtras))
}   

//Aca le vamos diciendo que ante los cambios reaccione actualizando el valor total del pedido
function  actualizarCarroExtras (){
    numeritoCarro.innerText = carritoExtras.reduce((acc,el)=> acc + el.cantidad, 0)
    carroTotal.innerText = carritoExtras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}

//Aca le pedimos a la pagina que si tiene almacenado lo ponga en display
function almacenado() {
    let almacenadoLocal = JSON.parse(localStorage.getItem('carrito'))
    if(almacenadoLocal){
        almacenadoLocal.forEach(element => {
            cargarExtra(element.id)
        });
    }
}

almacenado()
