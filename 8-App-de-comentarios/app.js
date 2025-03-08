/*Problema: Seguimiento de Libros
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los comentarios deben aparecer junto con la fecha y hora de publicación.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.*/

const btnComment = document.getElementsByTagName("button")[0]; //uso de indice 0 para hacer referencia al primer elemento button del html, se usa getElementsByTagName para el element button

const inputComment = document.getElementById("inputComentario"); // uso de getElementById para obtener el element por el ID, en este caso se llama inputComentario

const boxComments = document.getElementsByClassName("comentarios")[0]; // obtener primer elemento por clase con nombre comentarios

const btnErase = document.getElementById("eliminar") // obtener el butón de eliminar

const comments = [] //creando arreglo vacio
let i = 0 // iniciando contador en 0, nos va ayudar para mantener el registro de la entradas de los comentarios e eliminar comentarios

// remueve el comportamiento predeterminado de los formularios que recargan la página
let commentar = (event) => {
    event.preventDefault();
    /*boxComments.innerHTML += `<li>${inputComment.value}</li>`;
    inputComment.value = "";*/

    //se obtiene hora y hora local
    const fecha = new Date();
    const hoy = fecha.toLocaleString();

    // creación de una entrada de commentario para ejemplificar

    const comment = {
        id : i++, //key del comment
        date: hoy, //fecha
        comment: inputComment.value,
        user: "Usuario Anónimo"
    }

    // insertamos el comentario ejemplo en el arreglo vacio "comments"
    comments.push(comment)

    // llamada de función que va imprimir el arreglo de comments

    printComments(comments);

    // limpiar entrada de comentario
    inputComment.value = "";
    btnErase.style.visibility = "visible";
}   



// creacion de la funcion printComments

let printComments = (array) => {

    boxComments.innerHTML = ""

    array.forEach( item => {

        const {date, comment, user} = item
        boxComments.innerHTML += `
            <li> 🗣️ ${comment} | 👤 User: ${user} | ⌚ Fecha: ${date}</li>
        `
    });
}

let eliminar = (event) => {
    event.preventDefault();
    comments.pop();

    printComments(comments);

    if (comments.length == 0){
        btnErase.style.visibility = "hidden";
    }
}

// funcion que se ejecuta al dar click al butón



btnComment.addEventListener("click", commentar)



btnErase.addEventListener("click", eliminar) 
