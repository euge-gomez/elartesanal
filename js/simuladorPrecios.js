//Simulador de precios
let pedido = prompt("Ingresa tu pedido de extras de El Artesanal");
if (pedido == "") {
    alert("No ingresaste pedido");
}
else {
    switch (pedido.toLowerCase()) {
        case "pizza":
            alert("El precio de la Pizza es $350 la unidad estandar y las variedades especiales $450.");
            break;
        case "pata":
            alert("El precio de la pata para 10 personas con pan y salsas es de $2500.");
            break;
        case "catering":
            alert("El precio de catering salado solicitar presupuesto");
            break;
        case "picadas":
            alert("El precio de las picadas para 4 personas es de $800");
            break;
        default:
           alert("Este producto no esta en el listado, quisiste decir pizza, pata, catering o picadas? Refresca y probá de nuveo por favor, muchas gracias");
    }
}

