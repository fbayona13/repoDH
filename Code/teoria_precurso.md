CLASES DE INTRODUCCION A FULL STACK 

--> HOLA MUNDO!

//escribimos en terminal >node index.js para ejecutarlo
let saludo = "hola mundo!";
console.log (saludo);

--> OPERADOR DE COMPARACION ESTRICTA
let nameOne = 1;
let nameTwo = 1;

if (nameOne === nameTwo){
    console.log ('esta rari');
}

--> OPERADOR DE DESIGUALDAD ESTRICTA
let nameFour = 1;
let nameFive = 1;

if (nameFour !== nameFive){
    console.log ('esta rari');
}

--> FUNCIONES

// funcion expresada 
let suma = function (a, b){
    return a + b;
}

console.log(suma(10, 20));

// funciones declaradas
function resta (a, b){
    return a - b;
}

console.log(resta(10, 20));

// funcion .lenght 
function lengthName (nombre, apellido){
    let nombreCompleto = nombre + " " + apellido;
    return nombreCompleto.length;
}

console.log (lengthName("Facundo", "Bayona"));

--> EJERCICIO CONDICIONAL **PUEDO IR AL BANCO?**
function puedoIrAlBanco (diaDeLaSemana, horaActual){
    //esto se puede hacer, lo que no podemos hacer es poner una variable entre un rango <>
    return diaDeLaSemana != "Sábado" && diaDeLaSemana != "Domingo" && horaActual<15 && horaActual>=10;
}

console.log (puedoIrAlBanco("Lunes", 10));

--> ARRAYS 
//metodo **.length**, devuelve el total de elementos de un array

let pelisFavoritas = ['Kill Bill', 'Alien', 'Stars Wars'];
console.log (pelisFavoritas.length); //Devuelve 3

//metodo **.push**, agrega un valor al final del array

let pelisFavoritas = ['Kill Bill', 'Alien', 'Stars Wars'];
pelisFavoritas.push('Pulp Fiction');
console.log (pelisFavoritas); //Devuelve ['Kill Bill', 'Alien', 'Stars Wars', 'Pulp Fiction']

//metodo **.pop**, elimina un valor al final del array

let pelisFavoritas = ['Kill Bill', 'Alien', 'Stars Wars', 'Pulp Fiction'];
pelisFavoritas.pop();
console.log (pelisFavoritas); //Devuelve ['Kill Bill', 'Alien', 'Stars Wars']

let ultimaPelicula = pelisFavoritas.pop();
console.log (ultimaPelicula); //Devuelve la pelicula eliminada 'Pulp Fiction'

//metodo **.indexOf**, indica la posicion del valor que buscamos 

let pelisFavoritas = ['Kill Bill', 'Alien', 'Stars Wars', 'Pulp Fiction'];

let estaPelicula = pelisFavoritas.indexOf(2);
let noEstaPelicula = pelisFavoritas.indexOf(5);

console.log (estaPelicula); //Devuelve la posicion de Alien: 2
console.log (noEstaPelicula); //Devuelve -1 porque no existe

--> CICLOS 
// for 
for (let i = 0; condicion; i++){
    console.log();
}
// while
// do-while


--> funcion que suma todos los numeros en un array de longitud indefinida
function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}
