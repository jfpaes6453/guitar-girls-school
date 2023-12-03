// Funciones de control de sonido
//function loadSounds() { /* ... */ }
//function playSound(soundId) { /* ... */ }
function cloneAndPlay(audioNode) {
    var clone = audioNode.cloneNode(true);
    clone.play();
}

// Suponiendo que E1 es un elemento de audio definido en alguna parte de tu código
var E1 = document.getElementById('E1');

// Seleccionar todos los elementos con la clase 'note-fret'
var noteFrets = document.querySelectorAll('.string-one');

// Añadir el manejador de evento a cada elemento
noteFrets.forEach(function(noteFret) {
    noteFret.addEventListener('mousedown', function() {
        cloneAndPlay(E1);
    });
});

