let colours = ["rgb(36, 208, 90)", "rgb(233, 188, 63)", "#eb4888", "rgb(16, 162, 245)"];
const url = "https://icanhazdadjoke.com/";
const config = { "headers": { "Accept": "application/json"}};
const jokeTextElem = document.querySelector('.joke-text');
const jokeTextHidElem = document.querySelector('.hidden-joke-text');
const btnElem = document.querySelector('.btn');
const btnCopier = document.querySelector('.fa-copy');

window.addEventListener('load', e => getJoke());
btnElem.addEventListener('click', e => getJoke());
btnCopier.addEventListener('click', e => { getSelection().selectAllChildren(jokeTextHidElem); document.execCommand('copy');})


function getJoke() {
    btnElem.classList.add('disabled');
    fetch(url, config)
        .then(response => response.json())
        .then(data => jokeTextHidElem.innerText = jokeTextElem.innerText = data.joke)
        .catch(err => console.error(err))
        .finally(()=> btnElem.classList.remove('disabled'));
    
}