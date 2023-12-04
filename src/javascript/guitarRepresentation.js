let fretboard = document.querySelector(".fretboard");
let numberOfFretsInput = document.getElementById("number-of-frets");
let numberOfFrets = 20;
// const singleFretMarkP=[3,5,7,9,15,17,19,21];
// const doubleFretMarkP=[12,24]

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
        // if (string.children<7) {
        //     if(singleFretMarkP.indexOf!==-1)
        //         const oneFretMark = document.createElement('div');
        //         oneFretMark.classList.add('single-fretmark');
        //         fretString.appendChild(oneFretMark);
        //     })
        // }
    
        /* singleFretMarkP.forEach(position => {
            if (position <= numberOfFrets) {
                if (position <= numberOfFrets) {
                    if (stringIndex === 1 || stringIndex === 2) { // Check if it's the second or third string
                        const fretPosition = position - 1; // Adjusting for zero-based indexing
                        const fretString = string.children[fretPosition];
                        if (fretString == 3) {
                            const oneFretMark = document.createElement('div');
                            oneFretMark.classList.add('single-fretmark');
                            fretString.appendChild(oneFretMark);
                        }
                    }
                }
            }
        }); */
        /* ADAPTED CODE MUSIC AND CODING
        if(i===0 && singleFretMarkP.indexOf(i) !==-1){
            newFret.classList.add('single-fretmark');
        } */
    });
}

numberOfFretsInput.addEventListener('change', () => {
    numberOfFrets = numberOfFretsInput.value;
    addFretToFretBoard();
});
