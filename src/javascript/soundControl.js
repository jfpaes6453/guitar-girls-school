const noteMap = [
    // 1ra cuerda (E más aguda)
    ["E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5"],
    // 2da cuerda (B)
    ["B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4"],
    // 3ra cuerda (G)
    ["G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4"],
    // 4ta cuerda (D)
    ["D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4"],
    // 5ta cuerda (A)
    ["A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3"],
    // 6ta cuerda (E más grave)
    ["E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3"]
];


// Agrega los event listeners necesarios al cargar el DOM
document.addEventListener('DOMContentLoaded', function() {
    const fretboard = document.querySelector('.fretboard');
    addEventListenersToFretboard(fretboard);
});

// Añade event listeners al mástil de la guitarra para manejar interacciones con las cuerdas
function addEventListenersToFretboard(fretboard) {
    fretboard.addEventListener('mousedown', handleFretInteraction);
    fretboard.addEventListener('mouseover', handleFretInteraction);
}

// Maneja la interacción con los trastes, ya sea por click o arrastrando el ratón
function handleFretInteraction(event) {
    if (event.type === 'mouseover' && !(event.buttons === 1 || event.buttons === 3)) {
        return; // Solo reacciona en 'mouseover' si se está manteniendo presionado el botón del ratón
    }

    if (isFretElement(event.target)) {
        const { stringIndex, fretIndex } = getFretDetails(event.target);
        playNote(stringIndex, fretIndex);
    }
}

// Determina si un elemento del DOM es un traste de la guitarra
function isFretElement(element) {
    return element.classList.contains('note-fret');
}

// Obtiene los índices de la cuerda y el traste a partir de un elemento traste
function getFretDetails(fretElement) {
    const string = fretElement.parentNode;
    const fretboard = string.parentNode;
    const stringIndex = Array.from(fretboard.children).indexOf(string);
    const fretIndex = Array.from(string.children).indexOf(fretElement);
    return { stringIndex, fretIndex };
}

// Reproduce la nota correspondiente a la cuerda y el traste dados
function playNote(stringIndex, fretIndex) {
    const note = noteMap[stringIndex][fretIndex];
    const audio = new Audio(`/assets/sounds/${note}.mp3`);
    audio.play();
}


