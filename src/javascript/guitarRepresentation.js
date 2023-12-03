let fretboard = document.querySelector(".fretboard");
let numberOfFretsInput = document.getElementById("number-of-frets");
let numberOfFrets = 20;

function addFretToFretBoard() {
    const strings = document.querySelectorAll('.string');
    strings.forEach(string => {
        // Remove any existing frets
        while (string.firstChild) {
            string.removeChild(string.firstChild);
        }
        // Add the updated number of frets
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
