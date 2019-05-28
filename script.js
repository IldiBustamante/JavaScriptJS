/*let btn = document.querySelector("button")

//genero mi funcion para el evento y va a responder con el click
function hacerClick(){
    console.log("Hiciste click")
}


//agregar nodo de esta forma siempre
// nodo.addEventListener(evento,callback)

btn.addEventListener("click",hacerClick) //recordar que aca uso el evento

//ejercicio

crear un boton por cada click que se haga
cada boton nuevo tiene que verse en el DOM
cada boton nuevo tiene que tener un callback en su propio evento click
todos los botones en pantalla tienen que tener como texto boton N 
donde N es un numero arrancando de 1 el cual va aumentando de a uno 
*/

//voy a crear un boton por cada click

//Ejercicio 
let btn = document.querySelector("button")
function hacerClick(){
    console.log("Hiciste click")
}
btn.addEventListener("click",hacerClick)

let contador=1

function hacerClick(){

let botonNuevo=document.createElement("button")

//agrego al DOM

let body=document.querySelector("body")
body.appendChild(botonNuevo)

//cambiar lo que dice cada boton

botonNuevo.innerText="Boton " + contador

contador=contador +1

//punto 3, su boton nuevo y su callback, o sea, necesito identificar 3 cosas, cual necesita un callback a quien le voy a hacer que cosa y a que etiqueta le corresponde el evento
function mismaFuncionParaTodosLosBotones(){
    console.log("Click en alguno de los botones :)")

}

botonNuevo.addEventListener("click",mismaFuncionParaTodosLosBotones)

}



