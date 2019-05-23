//hay primitivos y objetos
// primitivos number, string, boolean, los que vamos a usar
// objetos : object, array y function
// hay variables
// object {} array []


let nombre="Ildara";
let apellido="Bustamante"
let nombre_completo= nombre + " "+  apellido
//console.log(nombre_completo); // nos muestra en consola todo, pero hay mejores

let numeros=[10,7,6,4,3,"numeros",true]

//console.log(numeros)
//console.log(numeros.length) // nos dice el largo de mi arrays
//console.table(numeros) //nos da una tabla del array, usar cuando uso arrays
//numeros.push("Hola te saludo") //agrego cosas a mi array
//numeros.push(75)
//console.table(numeros)

let persona={
    nombre : "Maria Ildara",
    edad:23,
    vive:true,
}
persona.trabaja=false //propiedades dinamicas que puedo seguir agregando
persona.TieneGato=true
console.table(persona)

//estructuras de control con bucles

for (let i = 0; i < numeros.length; i++) {
    console.table(numeros[i])  
   
}


