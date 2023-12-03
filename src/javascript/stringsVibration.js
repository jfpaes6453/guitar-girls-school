// funciones de vibración de las cuerdas de la guitarra

const strings = document.querySelectorAll('.string');

function vibrateString(string) {
  string.classList.add('vibrating'); 
  setTimeout(() => {
    string.classList.remove('vibrating');
  }, 300);
}
strings.forEach(string => {
  string.addEventListener('click', () => {
    vibrateString(string);
  });
});




