
function validarNombre() {
    let nombre = document.getElementById("fnombre");
    let listaErrores = document.getElementById("validacionNombre");
    let li = document.createElement("li");
    if(nombre.value == ""|| nombre.value.length < 3 ){
        nombre.style.border = "3px solid red";
        listaErrores.appendChild(li);
        li.innerHTML = "El campo debe contener minimo 3 caracteres";
        return false;
    }else{
        nombre.style.border = "3px solid #444444";
        return true;
    }
}
function validarApellido(){
    let apellido = document.getElementById("fapellido");
    let listaErrores = document.getElementById("validacionApellido");
    let li = document.createElement("li");
    if(apellido.value == "" || apellido.value.length < 3){
        apellido.style.border = "3px solid red";
        listaErrores.appendChild(li);
        li.innerHTML = "El campo debe contener minimo 3 caracteres";
        return false;
    }else{
        apellido.style.border = "3px solid #444444";
        return true;
    }
}
function validarEmail() {
    let email = document.getElementById("femail");
    let listaErrores = document.getElementById("validacionEmail");
    let i = document.createElement("i");
    let li = document.createElement("li");
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        email.style.border = "3px solid red";
        li.innerHTML = "debe ser estilo ejemplo@contacto.com"
        listaErrores.appendChild(li);
        return false;
    }else{
        email.style.border = "3px solid #444444";
        return true;
    }
}
  let mensaje = false; 
function validarFormulario() {
    let listaErroresNombre = document.getElementById("validacionNombre");
    let listaErroresApellido = document.getElementById("validacionApellido");
    let listaErroresEmail = document.getElementById("validacionEmail");
    listaErroresNombre.innerHTML = "";
    listaErroresApellido.innerHTML = "";
    listaErroresEmail.innerHTML = "";
    let boolNombre = validarNombre();
    let boolApellido = validarApellido();
    let boolEmail = validarEmail();
    let nombreValidado = document.getElementById("mensajeConfirmacionFormulario");

    let nombre = document.getElementById("fnombre");
    let apellido = document.getElementById("fapellido");
    let email = document.getElementById("femail");
    let mensajeTxt = document.getElementById("tAfmensaje")
    if(boolNombre && boolApellido && boolEmail){
        if(mensaje){
          nombreValidado.innerHTML = "";
        }
          let bienvenida = document.createElement("li");
          let nombreUl = document.createElement("li");
        bienvenida.innerHTML = "¡¡¡Bienvenido a Locked-In: !!!";
        nombreUl.innerHTML = nombre.value+" "+apellido.value;
        nombreValidado.appendChild(bienvenida);
        nombreValidado.appendChild(nombreUl);
        mensaje = true;
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        mensajeTxt.value = "";
        
    }
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    let carrusel = document.getElementById("carrusel");
    let carruselItems = carrusel.getElementsByClassName("carousel-item");
    let botonAtras = document.getElementById("buttonBack");
    let botonAdelante = document.getElementById("buttonFront");
    let indice = 0;
    let contador = carruselItems.length;
    function mostrar() {
      for (let i = 0; i < contador; i++) {
        carruselItems[i].style.display = "none";
      }
  
      for (let i = indice; i < indice + 3; i++) {
        if (carruselItems[i]) {
          carruselItems[i].style.display = "block";
        }
      }
    }
  
    function siguiente() {
        indice += 3;
      if (indice >= contador) {
        indice = 0;
      }
      mostrar();
    }
  
    function anterior() {
        indice -= 3;
      if (indice < 0) {
        indice = contador - 3;
      }
      mostrar();
    }
  
    mostrar();
  
    botonAtras.addEventListener("click", function() {
        setTimeout(anterior, 200);
    });
    botonAdelante.addEventListener("click", function() {
        setTimeout(siguiente, 200);
    });

  });