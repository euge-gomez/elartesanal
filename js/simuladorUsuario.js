let usuario1 = {usuario:document.getElementById("nombre"), direccion:document.getElementById("direccion"), celular:document.getElementById("celular") , contrasenia:document.getElementById("contra").value} 

let infodeUsuario = document.getElementById("userinfo");

let clickear = document.getElementById("btningresar");
clickear.addEventListener("click", ingresar)

function ingresar () {
    let contenedorUsuario = document.createElement('div');
    const usuarioContenido = `<p class="user">Usuario: ${usuario1.usuario.value}</p>
                        <p class="user">Su dirección de entrega ingresada es: ${usuario1.direccion.value}</p>
                        <p class="user">Su número de celular ingresada es: ${usuario1.celular.value}
                        <p class="user">Su contraseña está verificada
                        <hr>`
    contenedorUsuario.innerHTML = usuarioContenido;
    infodeUsuario.append(contenedorUsuario)
}


