// Pedido de Usuarios para la página, para que quede logueado quien pide. 
function recepcion () {
    alert("Bienvenido al Artesanal")
    alert("Vamos a solicitarle los datos para que se convierta en un usuario")
}
recepcion()
class Usuario {
    constructor (usuario, contrasena, direccion) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.direccion = direccion;
    }
    recibir() {
        alert("Tus datos son" + this.usuario + "y la contraseña es correcta y tu direccion" + this.direccion);
    }
}
let usuario1 = new Usuario(prompt("Ingrese su usuario"), prompt("Ingrese su contraseña"), prompt("Ingrese lugar de recepción del pedido"))
usuario1.recibir()
let usuario2 = new Usuario(prompt("Ingrese su usuario"), prompt("Ingrese su contraseña"), prompt("Ingrese lugar de recepción del pedido"))
usuario1.recibir()