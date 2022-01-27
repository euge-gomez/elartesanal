let menu1 = prompt("Tu menú es individual? o corporativo?");
let menu2 = prompt("Preferis menú tradicional, light o vegetariano?");
    alert("Tu menú es " + menu1 + "y preferis un menú" + menu2);
//Array de comidas
const menuLunes = ["Pata mulso al verdeo con puré mixto", "Churrasquito con ensalada", "Rissoto", "Milanesa con ensalada"]
menuLunes.push("Supremas con ensalada")
console.log(menuLunes.length)
const menuMartes = ["Pastel de papas", "Tarta de atún con ensalada", "Hamburguesas de arroz yamani y calabaza con ensalada", "Milanesa con ensalada", "Suprema con ensalada"]
const menuMiercoles = ["Merluza a la romana con puré de papas", "Wok de verduras y pollo salteadas en salsa de soja", "Tarta de verduras con ensalada", "Milanesa con ensalada", "Suprema con ensalada", "Rissoto"]
menuMiercoles.pop()
console.log(menuMiercoles.join(", "))
const menuJueves = ["Milanesa de ternera con arroz amarillo", "Costeleta de cerdo con ensalada", "Wrap de verduras", "Milanesa con ensalada", "Suprema con ensalada"]
console.log(menuJueves.includes("Milanesa con ensalada"))
const menuViernes = ["Bondiola de cerdo con pure mixto", "Ensalada Cesar", "Omellete relleno (cebolla caramlizadam, tomate y queso)", "Milanesa con ensalada", "Suprema con ensalada"]
let dia = prompt("Que día es hoy? (evite acentos)")
if (dia == "") {
    alert("Quisiste decir lunes, martes, miercoles, jueves o viernes?");
}
else { switch (dia.toLowerCase()) {
                case "lunes":
                        alert("Tenemos todas estas excelentes opciones para vos: " + menuLunes.join(", \n"));
                        break;
                case "martes":
                        alert("Tenemos todas estas excelentes opciones para vos: " + menuMartes.join(", \n"));
                        break;
                case "miercoles":
                        alert("Tenemos todas estas excelentes opciones para vos: " + menuMiercoles.join(", \n"));
                        break;
                case "jueves":
                        alert("Tenemos todas estas excelentes opciones para vos: " + menuJueves.join(", \n"));
                        break;
                case "viernes":
                        alert("Tenemos todas estas excelentes opciones para vos: " + menuViernes.join(", \n"));
                        break;
                default: 
                        alert("Quisiste decir lunes, martes, miercoles, jueves o viernes?");
                }
}