// funciones de vibración de las cuerdas de la guitarra

// Obtener todas las cuerdas
const strings = document.querySelectorAll('.string');

// Función para hacer vibrar la cuerda (div.string)
function vibrateString(string) {
  string.classList.add('vibrating'); // Aplicar la clase que tiene la animación

  // Eliminar la clase después de un tiempo para detener la vibración
  setTimeout(() => {
    string.classList.remove('vibrating');
  }, 300);
}

// Agregar un event listener a cada cuerda para activar la vibración al hacer clic
strings.forEach(string => {
  string.addEventListener('click', () => {
    vibrateString(string);
  });
});




