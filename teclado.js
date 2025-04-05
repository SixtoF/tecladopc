
window.onload = function(){
    //asigno valores a las teclas
    var valoresTeclas = document.getElementsByName("tecla");
    for(var i = 0; i < valoresTeclas.length; i++){
        valoresTeclas[i].onclick = asignarValorTeclas;
    }

    //asigno la funcion cuando pulsas el boton o tecla
    document.getElementById("limpiar").onclick = borrar;

    document.getElementById("mostrar").onclick = desactivarTeclasMostrar;

    document.getElementById("teclea").onclick = activarTeclas;

    document.getElementById("mayus").onclick = activarDesactivarMayusculas;

    document.getElementById("shift").onclick = primeraLetraMayus;

    document.getElementById("guardar").onclick = guardarFrases;

    document.getElementById("primero").onclick = primeraPosicion;

    document.getElementById("ultimo").onclick = ultimaPosicion;

    document.getElementById("retroceder").onclick = haciaAtras;

    document.getElementById("avanzar").onclick = haciaDelante;

    document.getElementById("retro").onclick = backSpace;
    
}

//variables global
var interruptorMayus = false;
var interruptorShift = false;
var arrayList = [];
var indiceActual = arrayList.length -1;


//escribe por pantalla
function asignarValorTeclas(){
    
    if(interruptorShift == true){
        
        document.getElementById("pantalla").value += this.value.toUpperCase();
        interruptorShift = false;

    }else if(interruptorMayus == true){
        document.getElementById("pantalla").value += this.value.toUpperCase();

    } else{
        document.getElementById("pantalla").value += this.value;
    }
}

//funcion para guardar frases en un arrayList
function guardarFrases(){
    arrayList.push(document.getElementById("pantalla").value);
    //justo despues de guardar llamo a la funcion borrar para limpiar la pantalla
    borrar();

}

//para limpiar la pantalla 
function borrar(){
    document.getElementById("pantalla").value = "";
}

//funcion para desactivar teclas Y Mostrar arrayList
function desactivarTeclasMostrar(){
    var apagarTeclas = document.getElementsByName("tecla");

    for(var i = 0; i < apagarTeclas.length; i++){
        apagarTeclas[i].disabled = true;
    }

    document.getElementById("limpiar").disabled = true;
    document.getElementById("mayus").disabled = true;
    document.getElementById("guardar").disabled = true;
    document.getElementById("shift").disabled = true;
    document.getElementById("retro").disabled = true;
    document.getElementById("mostrar").disabled = true;
    document.getElementById("teclea").disabled = false;
    document.getElementById("primero").disabled = false;
    document.getElementById("retroceder").disabled = false;
    document.getElementById("avanzar").disabled = false;
    document.getElementById("ultimo").disabled = false;

    for(var i = 0; i < arrayList.length; i++){
        document.getElementById("pantalla").value = arrayList[0];
    }
    
}

// se activan las teclas cuando le das al boton teclear
function activarTeclas(){

    var encenderTeclas = document.getElementsByName("tecla");

    for(var i = 0; i < encenderTeclas.length; i++){
        encenderTeclas[i].disabled = false;
    }

    document.getElementById("limpiar").disabled = false;
    document.getElementById("mayus").disabled = false;
    document.getElementById("guardar").disabled = false;
    document.getElementById("shift").disabled = false;
    document.getElementById("retro").disabled = false;
    document.getElementById("mostrar").disabled = false;
    document.getElementById("teclea").disabled = true;
    document.getElementById("primero").disabled = true;
    document.getElementById("retroceder").disabled = true;
    document.getElementById("avanzar").disabled = true;
    document.getElementById("ultimo").disabled = true;

    borrar();
}

//muestra la primera posicion de mi arrayList
function primeraPosicion(){

    for(var i = 0; i < arrayList.length; i++){
        document.getElementById("pantalla").value = arrayList[0];
    }
}

//muestra la ultima posicion de mi arrayList
function ultimaPosicion(){
    for(var i = 0; i < arrayList.length; i++){
        document.getElementById("pantalla").value = arrayList[arrayList.length -1];
    }
}

//retrocede una posicion en mi arrayList
function haciaAtras(){
   if(indiceActual > 0){
    indiceActual--;
    document.getElementById("pantalla").value = arrayList[indiceActual];
   }
}

//avanza una posicion en mi arrayList
function haciaDelante(){
    if(indiceActual < arrayList.length -1){
        indiceActual++;
        document.getElementById("pantalla").value = arrayList[indiceActual];
    }
}

//para retroceder 
function backSpace(){
    
    document.getElementById("pantalla").value = document.getElementById("pantalla").value.slice(0,-1);
}

//funcion teclaMayus
function activarDesactivarMayusculas(){
    //
    interruptorMayus = !interruptorMayus;
}

//funcion para el shift
function primeraLetraMayus(){

   interruptorShift = true;
    
}