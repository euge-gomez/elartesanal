let menu = prompt("Tu menú es individual? o corporativo?");
while (menu.toLowerCase() != "listo"){
    alert("Respondiste "+ menu);
    menu = prompt("Es la primera vez que pedis con nosotros?");
    alert("Respondiste " + menu);
    menu = prompt("Preferis menú tradicional, light o vegetariano?")
    alert("Respondiste " + menu);
    menu = prompt("También podés encargar milanesa o suprema con ensalada, seguimos? (Escribí Listo)")
}