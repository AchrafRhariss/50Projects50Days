var inputs = document.querySelectorAll('input');
var labels = document.querySelectorAll('label');

labels.forEach(label=>{
	let text = label.textContent;
	label.textContent = '';
	text.split('').forEach((c,i)=>label.appendChild(createSpan(c,i)));
});

inputs.forEach(input=> input.addEventListener('focusin',toggleFocus));
inputs.forEach(input=> input.addEventListener('focusout',toggleFocus));

function toggleFocus(event) {
	if(event.target.value.trim() == '')
		event.target.parentElement.getElementsByTagName('label').item(0).classList.toggle('active')
}

function createSpan(c,i) {
	let el = document.createElement('span');
	el.style.transitionDelay = `${i*50}ms`;
	el.textContent = c;
	return el;
}