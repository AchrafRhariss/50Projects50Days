var elem = document.querySelectorAll('.fa-bars')[0]
var container= document.getElementsByClassName('container')
var links = document.querySelectorAll('.barmenu div');
var hamburger = document.getElementsByClassName('hamburger')[0]


elem.addEventListener('click', function(e) {
	if(e.target.classList.contains('fa-times')) {
		container[0].style.transform = 'rotate(0deg)';
		e.target.parentElement.style.position = 'fixed';
		links.forEach(e=>e.style.marginLeft='-200px')
		
	} else {
		container[0].style.transform = 'rotate(-20deg)';
		e.target.parentElement.style.position = 'absolute';
		links.forEach(e=>e.style.marginLeft='0px')

	}
	
	e.target.classList.toggle('fa-bars');
	e.target.classList.toggle('fa-times');
})