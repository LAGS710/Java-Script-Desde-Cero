let nota = 0;
let modo = 0;
let promedio = 0;
let notaPrimerParcial;
let notaSegundoParcial;
let notaTercerParcial;
let validador = 0;

modo = prompt("Por favor ingrese el modo que desea utilizar. \n 1. Consultar el estado de su nota. \n 2. Consultar el estado de su promedio.");

if (modo == 1){
    nota = prompt("¿Cual es tu calificación?");
    if(nota > 100 || nota < 0){
        alert("Por favor ingrese una calificación valida menor a 100 pero mayor a 0. Cerrando programa...");
    } else if (nota >= 90){
        alert("Su nota " + nota + " es excelente, ¡Felicidades!")
    } else if(nota <= 89 && nota >= 75){
        alert("Su note de" + "esta bien. Continue esforzandose.");
    } else if(nota <= 74 && nota >= 60){
        alert("Su note de " + " es suficiente. Tiene bastantes areas de oportunidad para mejorar.");
    } else alert("Su nota de " + nota + " es insuficiente. Usted no ha aprobado.");   
} else if ( modo == 2){
    notaPrimerParcial = prompt("¿Cual es la calificación del primer parcial?");
    notaSegundoParcial = prompt("¿Cual es la calificación del segundo parcial?");
    notaTercerParcial = prompt("¿Cual es la calificación del tercer parcial?");

    if(notaPrimerParcial > 100 || notaPrimerParcial < 0){
        alert("Por favor ingrese una calificación valida para el primer parcial que sea menor a 100 pero mayor a 0. Cerrando programa...");
    } else if(notaSegundoParcial > 100 || notaSegundoParcial < 0){
        alert("Por favor ingrese una calificación valida para el segundo parcial que sea menor a 100 pero mayor a 0. Cerrando programa...");
    } else if(notaTercerParcial > 100 || notaTercerParcial < 0){
        alert("Por favor ingrese una calificación valida para el tercer parcial que sea menor a 100 pero mayor a 0. Cerrando programa...");
    } else validador = 1;

    if( validador === 1){
        promedio = (Number(notaPrimerParcial) + Number(notaSegundoParcial) + Number(notaTercerParcial)) / 3
        nota = promedio.toFixed(2); // para evitar que se muestren muchos decimales, por ejemplo 50+80+70 daria un promedio de 66.6666667 para un period de 3 parciales.
        if (nota >= 90){
            alert("Su promedio de " + nota + " es excelente, ¡Felicidades!")
        } else if(nota <= 89 && nota >= 75){
            alert("Su promedio de" + nota + " esta bien. Continue esforzandose.");
        } else if(nota <= 74 && nota >= 60){
            alert("Su promedio de " + nota + " es suficiente. Tiene bastantes areas de oportunidad para mejorar.");
        } else if (nota =! 0) {alert("Su promedio de " + nota + " es insuficiente. asdsd Usted no ha aprobado el semestre.");}  
        }
} else alert("Por favor seleccione un modo válido.");