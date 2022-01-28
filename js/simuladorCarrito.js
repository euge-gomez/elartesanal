class Menu {
    constructor (dia, ordennro, tipo, nombre, precio) {
            this.dia = dia;
            this.ordennro = ordennro;
            this.tipo = tipo;
            this.nombre = nombre;
            this.precio = precio;
    }
}
const menu01 = new Menu ("Lunes", 1, "tradicional", "Pata mulso al verdeo con puré mixto", 300)
const menu02 = new Menu ("Lunes", 2, "light", "Churrasquito con ensalada", 300)
const menu03 = new Menu ("Lunes", 3, "vegetariano", "Rissoto", 300)
const menu04 = new Menu ("Lunes", 4, "Opción Milanesa", "Milanesa con ensalada", 300)
const menu05 = new Menu ("Lunes", 5, "Opción Suprema", "Suprema con ensalada", 300)
const menu06 = new Menu ("Martes", 1, "tradicional", "Pastel de papas", 300)
const menu07 = new Menu ("Martes", 2, "light", "Tarta de atún con ensalada", 300)
const menu08 = new Menu ("Martes", 3, "vegetariano", "Hamburguesas de arroz yamani y calabaza con ensalada", 300)
const menu09 = new Menu ("Martes", 4, "Opción Milanesa", "Milanesa con ensalada", 300)
const menu10 = new Menu ("Martes", 5, "Opción Suprema", "Suprema con ensalada", 300)
const menu11 = new Menu ("Miercoles", 1, "tradicional", "Merluza a la romana con puré de papas", 300)
const menu12 = new Menu ("Miercoles", 2, "light", "Wok de verduras y pollo salteadas en salsa de soja", 300)
const menu13 = new Menu ("Miercoles", 3, "vegetariano", "Tarta de verduras con ensalada", 300)
const menu14 = new Menu ("Miercoles", 4, "Opción Milanesa", "Milanesa con ensalada", 300)
const menu15 = new Menu ("Miercoles", 5, "Opción Suprema", "Suprema con ensalada", 300)
const menu16 = new Menu ("Jueves", 1, "tradicional", "Milanesa de ternera con arroz amarillo", 300)
const menu17 = new Menu ("Jueves", 2, "light", "Costeleta de cerdo con ensalada", 300)
const menu18 = new Menu ("Jueves", 3, "vegetariano", "Wrap de verduras", 300)
const menu19 = new Menu ("Jueves", 4, "Opción Milanesa", "Milanesa con ensalada", 300)
const menu20 = new Menu ("Jueves", 5, "Opción Suprema", "Suprema con ensalada", 300)
const menu21 = new Menu ("Viernes", 1, "tradicional", "Bondiola de cerdo con pure mixto", 300)
const menu22 = new Menu ("Viernes", 2, "light", "Ensalada Cesar", 300)
const menu23 = new Menu ("Viernes", 3, "vegetariano", "Omellete relleno (cebolla caramlizadam, tomate y queso)", 300)
const menu24 = new Menu ("Viernes", 4, "Opción Milanesa", "Milanesa con ensalada", 300)
const menu25 = new Menu ("Viernes", 5, "Opción Suprema", "Suprema con ensalada", 300)

const baseDeMenus = [
    menu01, menu02, menu03, menu04, menu05, menu06, menu07, menu08, menu09, menu10, menu11, menu12, menu13, menu14, menu15, menu16, menu17, menu18, menu19, menu20, menu21, menu22, menu23, menu24, menu25]
alert("Bienvenido al carrito de El Artesanal")
const diaDeHoy = new Date
switch (parseFloat(diaDeHoy.getDay())) {
    case 1:
        alert("Hoy es Lunes, recordá elegir entre las opciones que dicen Lunes");
        break;
    case 2:
        alert("Hoy es Martes, recordá elegir entre las opciones que dicen Martes");
        break;
    case 3:
        alert("Hoy es Miercoles, recordá elegir entre las opciones que dicen Miercoles");
        break;
    case 4:
        alert("Hoy es Jueves, recordá elegir entre las opciones que dicen Jueves");
        break;
    case 5:
        alert("Hoy es Viernes, recordá elegir entre las opciones que dicen Viernes");
        break;
    default:
        alert("Hoy descansamos, te esperamos de nuevo el Lunes!")
}
const carro = []
function renderizarMenus () {
    document.write(`<br><button onclick="oferta()">Desea ver ofertas?</button>`)
    baseDeMenus.forEach((el)=> {document.write(`<br> ${el.dia} <br> ${el.nombre} <button onclick="comprar()">Comprar</button><br><br>`)})
    document.write(`<br><button onclick="mostrarLunes()">Mostrar menus de Lunes</button>`)
}
let precioMenu = 300
console.log(precioMenu)
function comprar(){
    carro.push(baseDeMenus[15])
    console.log(carro)
    alert("Ya compraste tu menú, a la brevedad estaremos por tu domicilio")
    alert("Tu menú costará $" + precioMenu + " más $" + Math.round(precioMenu*0.15) + " de envio.") 
}
function oferta(){
    alert("Llevando 3 o más menús el precio quedaría: 3 Menús: $" + Math.round(3*precioMenu) + ", 4 Menús: $" + Math.round(4*precioMenu*0.9)+ " y 6 Menú: $" + Math.round(6*precioMenu*0.8) + " todo con el envío bonificado!. Escribinos para más combinaciones!")
}
//Todas estás fuciones están ingresadas para cumplir con la consigna
function mostrarLunes(){
    const diaLunes = baseDeMenus.filter((el)=> el.dia.includes("Lunes"));
    console.log(diaLunes);
}
const hayMenu = baseDeMenus.some(menu => menu.nombre === "Rissoto");
console.log(hayMenu);
const listaTipos = baseDeMenus.map(menu => menu.tipo)
console.log(listaTipos);



