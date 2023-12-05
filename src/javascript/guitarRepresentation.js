let fretboard = document.querySelector(".fretboard");
let numberOfFretsInput = document.getElementById("number-of-frets");
let numberOfFrets = 20;


function addFretToFretBoard() {
    const strings = document.querySelectorAll('.string');
    strings.forEach(string => {

        // Quitar los trastes existentes
        while (string.firstChild) {
            string.removeChild(string.firstChild);
        }

        // Agregar número de trastes actualizados
        for (let i = 0; i < numberOfFrets; i++) {
            const newFret = document.createElement('div');
            newFret.classList.add('note-fret');
            string.appendChild(newFret);
        }

    });
}

numberOfFretsInput.addEventListener('change', () => {
    numberOfFrets = numberOfFretsInput.value;
    addFretToFretBoard();
});
