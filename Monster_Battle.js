// Este es un mesaje nuevo

let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("mascotas")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let ataqueAire1 = document.getElementById("ataqueDeAire1")
    ataqueAire1.addEventListener("click", TornadoCortante)
    
    let ataqueAire2 = document.getElementById("ataqueDeAire2")
    ataqueAire2.addEventListener("click", RemolinoVeloz)

    let ataqueAire3 = document.getElementById("ataqueDeAire3")
    ataqueAire3.addEventListener("click", VentiscaCortante)

    let ataqueAire4 = document.getElementById("ataqueDeAire4")
    ataqueAire4.addEventListener("click", SirocoAbrasador)
}

function seleccionarMascotaJugador() {
    let inputAerogon = document.getElementById("Aerogon")
    let inputInfernochar = document.getElementById("Infernochar")
    let inputAquatide = document.getElementById("Aquatide")
    let inputTerradon = document.getElementById("Terradon")
    let spanMascotaJugador = document.getElementById("MascotaJugador")
    var ataquesDeAire = document.getElementById("ataquesDeAire");
    var ataquesDeFuego = document.getElementById("ataquesDeFuego");
    var ataquesDeAgua = document.getElementById("ataquesDeAgua");
    var ataquesDeTierra = document.getElementById("ataquesDeTierra");
    
    if (inputAerogon.checked) {
        alert("¡¡¡Tu Compañero es Aerogon!!!")
        spanMascotaJugador.innerHTML = "Aerogon" 
        ataquesDeAire.style.display = "block";
        ataquesDeFuego.style.display = "none";
        ataquesDeAgua.style.display = "none";
        ataquesDeTierra.style.display = "none";

    } else if (inputInfernochar.checked) { 
        alert("¡¡¡Tu Compañero es Infernochar!!!")
        spanMascotaJugador.innerHTML = "Infernochar"
        ataquesDeFuego.style.display = "block";
        ataquesDeAgua.style.display = "none";
        ataquesDeTierra.style.display = "none";
        ataquesDeAire.style.display = "none";

    } else if (inputAquatide.checked) { 
        alert("¡¡¡Tu Compañero es Aquatide!!!")
        spanMascotaJugador.innerHTML = "Aquatide"
        ataquesDeAgua.style.display = "block";
        ataquesDeTierra.style.display = "none";
        ataquesDeAire.style.display = "none";
        ataquesDeFuego.style.display = "none";

    } else if (inputTerradon.checked) { 
        alert("¡¡¡Tu Compañero es Terradon!!!")
        spanMascotaJugador.innerHTML = "Terradon"
        ataquesDeTierra.style.display = "block";
        ataquesDeFuego.style.display = "none";
        ataquesDeAgua.style.display = "none";
        ataquesDeAire.style.display = "none";

    }  else {
        alert("Elige un compañero")
    }

    seleccionarMascotaEnemigo()
}

let mascotaAleatoria;

function seleccionarMascotaEnemigo(){
    mascotaAleatoria = aleatorio(1,4);
    let spanMascotaEnemigo = document.getElementById("MascotaEnemiga")

        if (mascotaAleatoria == 1){
            spanMascotaEnemigo.innerHTML = "Aerogon" ;
        } else if (mascotaAleatoria == 2){
            spanMascotaEnemigo.innerHTML = "Infernochar" ;
        } else if (mascotaAleatoria == 3){
            spanMascotaEnemigo.innerHTML = "Aquatide" ;
        } else {
            spanMascotaEnemigo.innerHTML = "Terradon" ;
        }
}

function TornadoCortante(){
    ataqueJugador = "Tornado Cortante";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function RemolinoVeloz(){
    ataqueJugador = "Remolino Veloz";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function VentiscaCortante(){
    ataqueJugador = "Ventisca Cortante";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function SirocoAbrasador(){
    ataqueJugador = "Siroco Abrasador";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}



function LlamaradaSolar(){
    ataqueJugador = "Llamarada Solar";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function EstallidoÍgneo(){
    ataqueJugador = "Estallido Ígneo";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function FogonazoFulgurante(){
    ataqueJugador = "Fogonazo Fulgurante";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function InfernoArdiente(){
    ataqueJugador = "Inferno Ardiente";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}



function TsunamiFurioso(){
    ataqueJugador = "Tsunami Furioso";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function MarejadaCongelante(){
    ataqueJugador = "Marejada Congelante";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function HidroesferaAplastante(){
    ataqueJugador = "Hidroesfera Aplastante";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function CascadaImpetuosa(){
    ataqueJugador = "Cascada Impetuosa";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}



function TerremotoTelúrico(){
    ataqueJugador = "Terremoto Telúrico";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function AvalanchaRocosa(){
    ataqueJugador = "Avalancha Rocosa";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function RupturaSísmica(){
    ataqueJugador = "Ruptura Sísmica";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}

function HedorFétido(){
    ataqueJugador = "Hedor Fétido";
    ataqueEnemigo = ataqueAleatorioEnemigo(mascotaAleatoria);
}


function ataqueAleatorioEnemigo(mascotaAleatoria){
    let ataqueEnemigo;
    let ataqueAleatorio = aleatorio(1 , 4);

    if (mascotaAleatoria == 1) { // Aerogon

        if(ataqueAleatorio == 1){
            ataqueEnemigo = "Tornado Cortante 🌪️";
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = "Remolino Veloz 🍃";
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = "Ventisca Cortante 🪭";
        } else {
            ataqueEnemigo = "Siroco Abrasador 🌬️";
        }

    } else if (mascotaAleatoria == 2) { // Infernochar

        if(ataqueAleatorio == 1){
            ataqueEnemigo = "Llamarada Solar 🔥";
        }  else if (ataqueAleatorio == 2){
            ataqueEnemigo = "Estallido Ígneo 💥";
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = "Fogonazo Fulgurante ♨️";
        } else {
            ataqueEnemigo = "Inferno Ardiente 😈";
        }

    } else if (mascotaAleatoria == 3) { // Aquatide

        if(ataqueAleatorio == 1){
            ataqueEnemigo = "Tsunami Furioso 🌊";
        }  else if (ataqueAleatorio == 2){
            ataqueEnemigo = "Marejada Congelante 🧊";
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = "Hidroesfera Aplastante ♒";
        } else {
            ataqueEnemigo = "Cascada Impetuosa 🚿";
        }

    } else { // Terradon

        if(ataqueAleatorio == 1){
            ataqueEnemigo = "Terremoto Telúrico 🫨";
        }  else if (ataqueAleatorio == 2){
            ataqueEnemigo = "Avalancha Rocosa 🗻";
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = "Ruptura Sísmica ⛰️";
        } else {
            ataqueEnemigo = "Hedor Fétido 🌄";
        }
    }
    
    return ataqueEnemigo;
 }


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
} 

window.addEventListener("load", iniciarJuego)