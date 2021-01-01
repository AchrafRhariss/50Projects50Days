var searchIcon = document.getElementsByClassName('search-icon')[0];
var searchInput = document.getElementsByClassName('search-input')[0];

var toggleSlideInput = (event) => {
	
	let viewableInputWidth = searchInput.offsetWidth;
	console.log(viewableInputWidth)
	searchInput.style.width = (viewableInputWidth === 0) ? '100%' : '0px';
	searchIcon.style.borderRadius = (viewableInputWidth !== 0) ? '5px' : '0px 5px 5px 0px';

}

searchIcon.addEventListener('click', toggleSlideInput);



