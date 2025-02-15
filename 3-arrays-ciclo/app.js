// creacion de arrays con objetos de cada tipo de fruta

let frutas = [
    {
        nombre: "Manzana",
        color: "Rojo"
    },
    {
        nombre: "Manzana",
        color: "Verde"
    },
    {
        nombre: "Pera",
        color: "Verde"
    },
    {
        nombre: "Platano",
        color: "Amarillo"
    },
    {
        nombre: "Guayaba",
        color: "Amarillo"
    },
    {
        nombre: "Piña",
        color: "Amarillo"
    },
    {
        nombre: "Naranja",
        color: "Naranja"
    },
    {
        nombre: "Durazno",
        color: "Naranja"
    },
    {
        nombre: "Mandarina",
        color: "Naranja"
    }
]

// ciclo para contar cada tipo de fruta con metodos 

let colorAmarillo = "";
let colorVerde = "";
let colorNaranja = "";  
let colorRojo = "";
let contadorPlatano = 0;
let contadorGuayaba = 0;
let contadorPiña = 0;
let contadorManzana = 0;
let contadorPera = 0;
let contadorDurazno = 0;
let contadorMandarina = 0;
let contadorNaranja = 0;


// imprimir array con el tipo de cada fruta segun la clasificacion deseada

for(i = 0; i < frutas.length; i++){
    if(frutas[i].color === "Amarillo"){
        colorAmarillo+= frutas[i].nombre + " ";
    } else if(frutas[i].color === "Verde"){
        colorVerde += frutas[i].nombre + " ";
    } else if(frutas[i].color === "Naranja"){
        colorNaranja += frutas[i].nombre + " ";
    } else colorRojo += frutas[i].nombre + " ";

    if(frutas[i].nombre === "Platano"){
        contadorPlatano++;
    } else if(frutas[i].nombre === "Guayaba"){
        contadorGuayaba++;
    } else if(frutas[i].nombre === "Piña"){
        contadorPiña++;
    } else if(frutas[i].nombre === "Manzana"){
        contadorManzana++;
    } else if(frutas[i].nombre === "Pera"){
        contadorPera++;
    } else if(frutas[i].nombre === "Durazno"){
        contadorDurazno++;
    } else if(frutas[i].nombre === "Mandarina"){
        contadorMandarina++;
    } else contadorNaranja++;
}


console.log("Las siguientes frutas son de color amarillo 🟡: " + colorAmarillo)
console.log("Las siguientes frutas son de color Verde 🟢: " + colorVerde)
console.log("Las siguientes frutas son de color Naranja 🟠: " + colorNaranja)
console.log("Las siguientes frutas son de color Rojo 🔴: " + colorRojo + "\n")

console.log("Estas son las cantidades que existen en inventario por cada fruta: \n Platano: " + contadorPlatano + "\n Piña: " + contadorPiña + " \n Guayaba: " + contadorGuayaba + " \n Manzana: " + contadorManzana + " \n Pera: " + contadorPera  + " \n Durazno: " + contadorDurazno + " \n Mandarina: " + contadorMandarina + "Naranja: " + contadorNaranja)

