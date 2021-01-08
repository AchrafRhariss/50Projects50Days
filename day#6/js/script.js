var boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', animate); // event listner for scroll event
window.addEventListener('load',animate); // event listner for DOM loading

function animate() {
	let top = window.innerHeight*0.7; // 70% of the viewport

	//if the box's top is in the 70% of the viewport then it will be shown otherwise
	boxes.forEach(box=> {
		//get top of the box
		let t = box.getBoundingClientRect().top;
		if(t<top) {
			box.classList.add('origin')
		} else {
			box.classList.remove('origin')
		}
	})
}


/*

Scroll in JS

//Width/Height of the entire window
console.log('Full window width  (including vertical scrollbar width) : '   + window.innerWidth)
console.log('Full window height (including horizontal scrollbar width) : ' + window.innerHeight)

//Width/Height of the part devoted to the content (without scrollbar)
console.log("window height : " + document.documentElement.clientHeight)
console.log("window width  : " + document.documentElement.clientWidth)


//Width/Height of the document
let documentHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
console.log('Document Height : ' + documentHeight)

*/