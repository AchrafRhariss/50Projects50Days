var progress = document.getElementsByClassName('progress')[0];
var overlay = document.getElementsByClassName('overlay')[0];
var container = document.getElementsByClassName('container')[0];


function f(i) {

	progress.textContent = i + ' %';
  	if(i%2 == 0) {
  		container.style.filter = 'blur('+ (50 - i/2) +'px)';
  		progress.style.opacity = (1.1 - i/100);
  		overlay.style.opacity = (1.1 - i/100);
  	}
  	i++;
  	const handle = setTimeout(()=>f(i), 50)
  	if(i>100) {
  		clearTimeout(handle)
  		progress.style.display = 'none';
  		overlay.style.display = 'none';
  	}
	
}

// When the page is ready (image loaded in our case)
window.addEventListener('load',(e) => {
	var i = 0;
	f(i);
}); 