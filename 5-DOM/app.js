/*Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)*/

const btnComment = document.getElementsByTagName("button")[0]; //uso de indice 0 para hacer referencia al primer elemento button del html, se usa getElementsByTagName para el element button

const inputComment = document.getElementById("inputComentario"); // uso de getElementById para obtener el element por el ID, en este caso se llama inputComentario

const boxComments = document.getElementsByClassName("comentarios")[0]; // obtener primer elemento por clase con nombre comentarios

let comment = (event) => {
    event.preventDefault();
    boxComments.innerHTML += `<li>${inputComment.value}</li>`;
    inputComment.value = "";
}   

btnComment.addEventListener("click", comment)
