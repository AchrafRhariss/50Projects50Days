const container = document.querySelector('.container');
document.addEventListener('keydown', event => {
    container.innerHTML = ['key', 'keyCode', 'code'].map(el => `<div class="box">${event[el] == ' ' ? 'Space' : event[el]}<span class="keyword">event.${el}</span></div>`).join('\n');
    event.preventDefault();    
})