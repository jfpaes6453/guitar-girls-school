// Funciones para mostrar notas en el mástil

document.addEventListener('DOMContentLoaded', function() {
    const showAllNotesInput = document.getElementById("show-all-notes");
    const root = document.documentElement;
    let notesVisible = false;

    showAllNotesInput.addEventListener('click', function() {
        if (!notesVisible) {
            root.style.setProperty('--noteDotOpacity', '1'); 
            notesVisible = true; 
        } else {
            root.style.setProperty('--noteDotOpacity', '0'); visibles
            notesVisible = false;
        }
        showAllNotesInput.checked = notesVisible; 
    });

    // Establecer la opacidad predeterminada al cargar la página (notas ocultas)

    root.style.setProperty('--noteDotOpacity', '0');

    const notesFlats = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
    const notesSharps = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
    const guitarTuning = [4,11,7,2,9,4];
    const numberOfFretsInput = document.getElementById("number-of-frets");
    const numberOfStrings = 6; 
    let accidentals = 'flats';

    const app = {
        generateNoteNames(noteIndex, accidentals) {
            let resetIndex = noteIndex % 12;
            noteIndex = resetIndex < 0 ? resetIndex + 12 : resetIndex;

            let noteName;
            if (accidentals === 'flats') {
                noteName = notesFlats[noteIndex];  
            } else if (accidentals === 'sharps') {
                noteName = notesSharps[noteIndex];
            }
            return noteName;
        },
        init() {
            root.style.setProperty('--number-of-strings', numberOfStrings);
            this.setupFretboard();
        },
        setupFretboard() {
            let numberOfFrets = parseInt(numberOfFretsInput.value);

            for (let i = 0; i < numberOfStrings; i++) {
                let stringNotes = document.querySelectorAll(`.string:nth-child(${i + 1}) .note-fret`);
                console.log(`String ${i} notes:`, stringNotes);

                for (let fret = 0; fret <= numberOfFrets; fret++) {
                    let noteFret = document.querySelector(`.string:nth-child(${i + 1}) .note-fret:nth-child(${fret + 1})`);
                    if (noteFret) {
                        let noteName = this.generateNoteNames(fret + guitarTuning[i], accidentals);
                        noteFret.setAttribute('data-note', noteName);
                        noteFret.textContent = noteName;
                    } else {
                        console.log(`Note fret ${fret} for string ${i} is null`);
                    }
                }
            }
        }
    };

    numberOfFretsInput.addEventListener('change', function() {
        app.setupFretboard(); 
    });

    app.init();
});

