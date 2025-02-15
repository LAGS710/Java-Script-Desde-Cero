let libros = [];
let agregarTituloLibro = "";
let condicion = 1;
let decision;

//funcion agregar con mostrar libros anidadas
function agregarLibro(titulo){

    while(decision != 2){
        titulo = prompt("Ingresa el nombre del libro que has leido.");
        libros.push(titulo);
        decision = prompt("¿Deseas ingresar otro libro? Ingresar un numero de acuerdo a la opción deseada. \n 1. Si \n 2. No");
        if (decision == 0){
            condicion = 0;
        }
    }

    console.log("Esta es la lista de libros leidos")
    mostrarLibrosLeidos();
}

function mostrarLibrosLeidos(){
    for(let i = 0; i < libros.length ; i++){
        console.log( i+1 + " " + libros[i]);
    }
}

//llamado de funcion
agregarLibro();