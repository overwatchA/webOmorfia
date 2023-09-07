let personajes = document.getElementById("personajes")
let imagenPrincipal = document.getElementById("imagenPrincipal")
let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")
var idiomaNumber = 1
var fondo = 1

let screenWidth = window.innerWidth;
let imagePrefix = screenWidth <= 1350 ? 'small' : 'large';

function mostrarImagenGrandeInicial() {
    imagenPrincipal.src = `./img/juan_${imagePrefix}.png`;
}
document.addEventListener("DOMContentLoaded", mostrarImagenGrandeInicial);

function cambiarPersonaje(e){
    if(e.target.innerText == 'Luis' || e.target.id == 'luis' ){
        console.log('Estas en Luis');
        imagenPrincipal.src = `./img/juan_${imagePrefix}.png`;
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'LUIS';
        parrafo.innerHTML = 'Hombre de mediana edad y padre de Lucas. <br>Es consciente de los problemas de alimentación poco saludable de su familia y muestra interés en investigar y cambiar su dieta.<br>Es reflexivo y se siente culpable por no haberse dado cuenta antes de los efectos negativos de la comida chatarra.<br>Está comprometido en mejorar la salud de su familia.';
        idiomaNumber = 1

    }else if(e.target.innerText == 'Ana' || e.target.id == 'ana'){
        console.log('Estas en Ana');
        imagenPrincipal.src = `./img/ana_${imagePrefix}.png`;
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'ANA';
        parrafo.innerHTML = 'Mujer de mediana edad y madre de Lucas.<br>Está preocupada por la salud de su hijo y se siente culpable por permitir que comieran tanta comida chatarra.<br>Está dispuesta a hacer cambios en la dieta familiar y muestra entusiasmo al descubrir alimentos frescos y saludables en los mercados campesinos.';
        idiomaNumber = 3

    }else if(e.target.innerText == 'Lucas' || e.target.id == 'lucas'){
        
        console.log('Estas en Lucas');
        imagenPrincipal.src = `./img/lucas_${imagePrefix}.png`;
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'LUCAS';
        parrafo.innerHTML = 'Hijo de Juan y Ana, de corta edad.<br>Experimenta problemas de salud debido a la mala alimentación de su familia. Está cansado y sin energía.<br>Su enfermedad lleva a la familia a investigar y cambiar su dieta.';
        idiomaNumber = 5

    }else if(e.target.innerText == 'Gomez' || e.target.id == 'gomez'){
        
        console.log('Estas en Gomez');
        imagenPrincipal.src = `./img/gomez_${imagePrefix}.png`;
        imagenPrincipal.classList.add('animacionPersonaje');
        setTimeout(function() {imagenPrincipal.classList.remove('animacionPersonaje');}, 300);
        titulo.innerText = 'GOMEZ';
        parrafo.innerHTML = 'Propietario de un supermercado local.<br>Es descrito como un hombre mayor y amargado.<br>Se muestra resentido y crítico cuando ve a la familia comprando en los mercados campesinos, y argumenta que los productos que venden son más confiables y menos costosos.';
        idiomaNumber = 7
    }
}
personajes.addEventListener("click", cambiarPersonaje);


function cambiarFondo(e) {
    if (fondo == 1) {
        imgFondo.style.backgroundImage = 'url(./img/30205.jpg)';
        fondo = 2
    } else if (fondo == 2){
        imgFondo.style.backgroundImage = 'url(./img/ilustracion-paisaje-campos-verano_176516-562.avif)';
        fondo = 1
    }
}
fondoText.addEventListener('click', cambiarFondo);
