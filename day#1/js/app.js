var boxes = document.querySelectorAll('.box');
boxes.forEach( box => box.addEventListener('click', (e) => {
	if(!e.target.classList.contains('grow')) {
		document.querySelector('.grow').classList.remove('grow');
		e.target.classList.add('grow');
	} else {
		return;
	}
}));