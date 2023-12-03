// funciones de vibración de las cuerdas de la guitarra

<<<<<<< HEAD
// Obtener todas las cuerdas
const strings = document.querySelectorAll('.string');

// Función para hacer vibrar la cuerda (div.string)
function vibrateString(string) {
  string.classList.add('vibrating'); // Aplicar la clase que tiene la animación

  // Eliminar la clase después de un tiempo para detener la vibración
=======
const strings = document.querySelectorAll('.string');

function vibrateString(string) {
  string.classList.add('vibrating'); 
>>>>>>> e4c4dc7ee8e73ae86a2d2bc8721aaa421dd74222
  setTimeout(() => {
    string.classList.remove('vibrating');
  }, 300);
}
<<<<<<< HEAD

// Agregar un event listener a cada cuerda para activar la vibración al hacer clic
=======
>>>>>>> e4c4dc7ee8e73ae86a2d2bc8721aaa421dd74222
strings.forEach(string => {
  string.addEventListener('click', () => {
    vibrateString(string);
  });
});




