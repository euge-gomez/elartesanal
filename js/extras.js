//Operadores avanzados
let extras = [{id:1, tipo:"Pizzas", subtipo:"Clasica", cantidad:"8 porciones", precio:350},
{id:2, tipo:"Pizzas", subtipo:"Especial", cantidad:"8 porciones", precio:450},
{id:3, tipo:"Pata", subtipo:"Flambeada", cantidad:"10 personas", precio:2500},
{id:4, tipo:"Picada", subtipo:"Cervecera", cantidad:"4 personas", precio:800},
{id:5, tipo:"Catering", subtipo:"Salado", cantidad:"X personas", precio:"Solicitar Presupuesto"}]
//Spread
console.log(...extras)
//Desectructuracion
const [a, b] = extras;
let pizzas = {a, b}
//operador ternario
console.log(extras[0].tipo)

let menuExtra = extras[2].tipo;
let precio = extras[2].precio;
const menu = {
    nombre: menuExtra,
    precio: precio
  }
const habilitaCuotas = (menu.precio >= 1000) ? true : false
habilitaCuotas ? console.log("Tiene habilitada la financiacion") : console.log("Se cancela en un pago unicamente")


