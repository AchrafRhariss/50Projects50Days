let audio = null;
let soundsElems = document.querySelectorAll('.sound-elem');

soundsElems.forEach(e=>e.addEventListener('click',handleSoundElemClick));

function handleSoundElemClick(ev) {
    if(audio != null || audio != undefined) {
        audio.pause();
    }
    
    audio = new Audio(`../audio/${ev.target.innerText.toLowerCase()}.mp3`);
    audio.play();
}