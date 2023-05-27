function validarNombre() {
    let nombre = document.getElementById("fnombre");
    let listaErrores = document.getElementById("validacionNombre");
    let li = document.createElement("li");
    if(nombre.value == ""|| nombre.value.length < 4 ){
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
    if(apellido.value == "" || apellido.value.length < 4){
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
    if(boolNombre && boolApellido && boolEmail){
        let bienvenida = document.createElement("li");
        let nombreUl = document.createElement("li");
        let nombre = document.getElementById("fnombre").value;
        let apellido = document.getElementById("fapellido").value;
        bienvenida.innerHTML = "¡¡¡Bienvenido a Locked-In: !!!";
        nombreUl.innerHTML = nombre+" "+apellido;
        nombreValidado.appendChild(bienvenida);
        nombreValidado.appendChild(nombreUl);
    }
    return false;
}

let indice = 1;

function devolverDiv(Num){
    let suns = document.getElementById("sunsAbout");
    let gsw = document.getElementById("gswAbout");
    let portland = document.getElementById("portlandAbout");
    let mavs = document.getElementById("mavsAbout");
    let spurs = document.getElementById("spursAbout");
    let nuggets = document.getElementById("nuggetsAbout");
    let pelicans = document.getElementById("pelicansAbout");
    let kings = document.getElementById("kingsAbout");
    let clippers = document.getElementById("clippersAbout");
    let thunders = document.getElementById("thundersAbout");
    let wolves = document.getElementById("wolvesAbout");
    let grizzlies = document.getElementById("grizzliesAbout");
    let utah = document.getElementById("utahAbout");
    let lakers = document.getElementById("lakersAbout");
    let rockets = document.getElementById("rocketsAbout");
    let philly = document.getElementById("phillyAbout");
    let bucks = document.getElementById("bucksAbout");
    let nets = document.getElementById("netsAbout");
    let pacers = document.getElementById("pacersAbout");
    let bulls = document.getElementById("bullsAbout");
    let heat = document.getElementById("heatAbout");
    let wizards = document.getElementById("wizardsAbout");
    let hawks = document.getElementById("hawksAbout");
    let pistons = document.getElementById("pistonsAbout");
    let knicks = document.getElementById("knicksAbout");
    let celtics = document.getElementById("celticsAbout");
    let hornets = document.getElementById("hornetsAbout");
    let magic = document.getElementById("magicAbout");
    let cavs = document.getElementById("cavsAbout");
    let raptors = document.getElementById("raptorsAbout");
    let vector = {suns,gsw,portland,mavs,spurs,nuggets,pelicans,kings,clippers,thunders,
    wolves,grizzlies,utah,lakers,rockets,philly,bucks,nets,pacers,bulls,heat,wizards,
    hawks,pistons,knicks,celtics,hornets,magic,cavs,raptors};
    return vector[Num];
}

function avanzar(){
    indice++;
    devolverDiv(indice);
}

function retroceder(){
    indice--;
    devolverDiv(indice);
}

// // function carrusel(){
//     var equipoWidth = document.querySelector(".team").offsetWidth;
//     var currentIndex = 0;
//     var desplazamiento = -currentIndex * equipoWidth;
//     let equipos = document.querySelector(".equipos");
//     equipos.style.transform = 'translateX(' + desplazamiento + 'px)';
// // }
// // carrusel();
    // var carrusel = document.querySelector('.carrusel');
    // var equipos = document.querySelector('.equipos');
    // var equipoWidth = document.querySelector('.team').offsetWidth;
    // var currentIndex = 0;

    // function mostrarEquipo(index) {
    //     var desplazamiento = -index * equipoWidth;
    //     equipos.style.transform = 'translateX(' + desplazamiento + 'px)';
    // }

    // function siguienteEquipo() {
    //     currentIndex++;
    //     if (currentIndex >= equipos.children.length) {
    //         currentIndex = 0;
    //     }
    //     mostrarEquipo(currentIndex);
    // }

    // function anteriorEquipo() {
    //     currentIndex--;
    //     if (currentIndex < 0) {
    //         currentIndex = equipos.children.length - 1;
    //     }
    //     mostrarEquipo(currentIndex);
    // }

    // setInterval(siguienteEquipo, 3000); // Cambiar de equipo automáticamente cada 3 segundos
    // setInterval(anteriorEquipo,3000);
    // carrusel.addEventListener('mouseover', function() {
    //     clearInterval(interval);
    // });

    // carrusel.addEventListener('mouseout', function() {
    //     interval = setInterval(siguienteEquipo, 3000);
    // });

