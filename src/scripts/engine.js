const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
const notesCheck = document.querySelector(".notes-check input");
const exe1 = document.querySelector(".ex1");
const exe2 = document.querySelector(".ex2");
const player = new Tone.Player().toDestination();

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wave");
const playTune = (key) => {
    audio.src= `src/tunes/${key.toLowerCase()}.wav`;
    audio.play();
    
    const clickedKey = document.querySelector(`[data-key="${key.toLowerCase()}"]`)
    //alert(key)
    clickedKey.classList.add("active");
    
    setTimeout(() => {
        clickedKey.classList.remove("active");}, 150);

}

pianoKeys.forEach((key)=>{

    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) =>{
    if (mapedKeys.includes(e.key)){
    playTune(e.key);}
});
const handleVolume = (e)=>{
    
    audio.volume = e.target.value;
}

const showHideKeys = () =>{

    pianoKeys.forEach(key=>key.classList.toggle("hide"))
}

const showHideNotes = () =>{
    if (notesCheck.checked) {
        pianoKeys.forEach(key => {
            const keySpan = key.querySelector('span');
            if (keySpan.innerText === 'A' || keySpan.innerText === 'a') {
                keySpan.innerText = 'C'; // Altere o texto como desejar
            } else if (keySpan.innerText === 'W' || keySpan.innerText === 'w') {
                keySpan.innerText = 'C#';
            } else if (keySpan.innerText === 'S' || keySpan.innerText === 's') {
                keySpan.innerText = 'D';
            } else if (keySpan.innerText === 'E' || keySpan.innerText === 'e') {
                keySpan.innerText = 'D#';
            } else if (keySpan.innerText === 'D' || keySpan.innerText === 'd') {
                keySpan.innerText = 'E';
            } else if (keySpan.innerText === 'F' || keySpan.innerText === 'f') {
                keySpan.innerText = 'F';
            } else if (keySpan.innerText === 'T' || keySpan.innerText === 't') {
                keySpan.innerText = 'F#';
            } else if (keySpan.innerText === 'G' || keySpan.innerText === 'g') {
                keySpan.innerText = 'G';
            } else if (keySpan.innerText === 'Y' || keySpan.innerText === 'y') {
                keySpan.innerText = 'G#';
            } else if (keySpan.innerText === 'H' || keySpan.innerText === 'h') {
                keySpan.innerText = 'A';
            } else if (keySpan.innerText === 'U' || keySpan.innerText === 'u') {
                keySpan.innerText = 'A#';
            } else if (keySpan.innerText === 'J' || keySpan.innerText === 'j') {
                keySpan.innerText = 'B';
            } else if (keySpan.innerText === 'K' || keySpan.innerText === 'k') {
                keySpan.innerText = 'C+';
            } else if (keySpan.innerText === 'O' || keySpan.innerText === 'o') {
                keySpan.innerText = 'C#+';
            } else if (keySpan.innerText === 'L' || keySpan.innerText === 'l') {
                keySpan.innerText = 'D+';
            } else if (keySpan.innerText === 'P' || keySpan.innerText === 'p') {
                keySpan.innerText = 'D#+';
            } else if (keySpan.innerText === ';' || keySpan.innerText === ';') {
                keySpan.innerText = 'E+';
            }
            
        });
    } else {
        pianoKeys.forEach(key => {
            const keySpan = key.querySelector('span');
            if (keySpan.innerText === 'C' || keySpan.innerText === 'c') {
                keySpan.innerText = 'A'; // Reverter para o texto original
            }else if (keySpan.innerText === 'C#' || keySpan.innerText === 'c#') {
                keySpan.innerText = 'W'; // Reverter para o texto original
            } else if (keySpan.innerText === 'D' || keySpan.innerText === 'd') {
                keySpan.innerText = 'S'; // Reverter para o texto original
            } else if (keySpan.innerText === 'E' || keySpan.innerText === 'e') {
                keySpan.innerText = 'D'; // Reverter para o texto original
            } else if (keySpan.innerText === 'D#' || keySpan.innerText === 'd#') {
                keySpan.innerText = 'E';
            } else if (keySpan.innerText === 'E' || keySpan.innerText === 'e') {
                keySpan.innerText = 'D';
            } else if (keySpan.innerText === 'F' || keySpan.innerText === 'f') {
                keySpan.innerText = 'F';
            } else if (keySpan.innerText === 'F#' || keySpan.innerText === 'f#') {
                keySpan.innerText = 'T';
            } else if (keySpan.innerText === 'G' || keySpan.innerText === 'g') {
                keySpan.innerText = 'G';
            } else if (keySpan.innerText === 'G#' || keySpan.innerText === 'g#') {
                keySpan.innerText = 'Y';
            } else if (keySpan.innerText === 'A' || keySpan.innerText === 'a') {
                keySpan.innerText = 'H';
            } else if (keySpan.innerText === 'A#' || keySpan.innerText === 'a#') {
                keySpan.innerText = 'U';
            } else if (keySpan.innerText === 'B' || keySpan.innerText === 'b') {
                keySpan.innerText = 'J';
            } else if (keySpan.innerText === 'C+' || keySpan.innerText === 'c+') {
                keySpan.innerText = 'K';
            } else if (keySpan.innerText === 'C#+' || keySpan.innerText === 'c#+') {
                keySpan.innerText = 'O';
            } else if (keySpan.innerText === 'D+' || keySpan.innerText === 'd+') {
                keySpan.innerText = 'l';
            } else if (keySpan.innerText === 'D#+' || keySpan.innerText === 'd#+') {
                keySpan.innerText = 'P';
            } else if (keySpan.innerText === 'E+' || keySpan.innerText === 'e+') {
                keySpan.innerText = ';';
            }
        });
    }
}
const playSequentialNotes = (notes,time) => {
    // Reproduzir cada nota em sequência com um pequeno intervalo entre elas
    notes.forEach((note, index) => {
        setTimeout(() => {
            playTune(note);
        }, index * time); // Intervalo de 500 ms entre cada nota
    });
};

const playMusic1 = () => {
    const notas = ["A", "A", "S", "A","F", "D"," ","A","A","S","A","G","F","F","H","H","K","H","F","D","S"," ","U","U", "H","F","G","F","F" ]; // Notas da música
    playSequentialNotes(notas, 650); // Reproduzir as notas sequencialmente
};
const playMusic2 = () => {
    const notas = ["A", "A", "G", "G","H", "H","G","G","F","F","D","D","S","S","A","A","G","G","F","F","D","D","S", "S","G","G","F","F","D","D","S","S","A","A","G","G","H","H","G","G","F","F","D","D","S","S","A","A" ]; // Notas da música
    playSequentialNotes(notas, 650); // Reproduzir as notas sequencialmente
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys)
notesCheck.addEventListener("click", showHideNotes)
exe1.addEventListener("click", playMusic1)
exe2.addEventListener("click", playMusic2)
