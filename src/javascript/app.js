/*export function sum(a, b) {
    return a + b
}*/

import { initializeApp } from './initialize.js';
import { drawGuitar } from './guitarRepresentation.js';
import { loadSounds, playSound } from  './soundControl.js';
import { handleClickOnString, handleKeyboardInput } from './userInteraction.js';
import { generateChord, tuneGuitar } from './guitarLogic.js';
import { switchMode, saveTemporaryData } from './stateManagement.js';

initializeApp();

