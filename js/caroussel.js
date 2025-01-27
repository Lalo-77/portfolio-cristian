let menuVista= false;

function mostrarOcultarMenu(){
    if(menuVista){
        document.getElementById("nav").classList ="";
        menuVista = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVista = true;
    }
}

function seleccionar(){
    //  para ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVista = false;
}
//Funcion que aplica animaciones de las habilidades 
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("comunicacion");
        habilidades[4].classList.add("trabajo");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
    }
}
//Detecto el scrolliing para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

const ENVIAR = document.querySelector("#enviar");
ENVIAR.addEventListener("click", () => {
'Se envio el mensaje';
})