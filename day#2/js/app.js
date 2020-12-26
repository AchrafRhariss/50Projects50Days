const steps = document.querySelectorAll('.step');
const buttons = document.querySelectorAll('.btn');
const lines = document.querySelectorAll('.line');

const stepsArray = Array.from(steps);
const linesArray = Array.from(lines);
const n = steps.length;

buttons.forEach((button) => {
  
  button.addEventListener('click', function(e) {
  	let lastActiveStep, lastActiveStepIndex;
  	if(!button.classList.contains('disabled')) {

  		for(let i=0; i<n; i++) {
	  		if(stepsArray[i].classList.contains('active')) {
	  			lastActiveStep = stepsArray[i];
	  			lastActiveStepIndex = i;
	  		}
	  	}
	  	if(e.target.textContent === 'Next') {

	  		stepsArray[lastActiveStepIndex+1].classList.add('active')
	  		linesArray[lastActiveStepIndex].classList.add('active')
	  		if(lastActiveStepIndex == n-2) {
	  			button.classList.add('disabled')
	  			button.style.cursor = 'not-allowed'
	  		}
	  		if(lastActiveStepIndex == 0) {
	  			buttons[0].classList.remove('disabled')
	  			buttons[0].style.cursor = 'pointer'
	  		}

	  	} else {

	  		stepsArray[lastActiveStepIndex].classList.remove('active')
	  		linesArray[lastActiveStepIndex-1].classList.remove('active')

	  		if(lastActiveStepIndex == 1) {
	  			button.classList.add('disabled')
	  			button.style.cursor = 'not-allowed'
	  		}
	  		if(lastActiveStepIndex == n-1) {
	  			buttons[1].classList.remove('disabled')
	  			buttons[1].style.cursor = 'pointer'
	  		}
	  		

	  	}
  	}
  	
  	
  })
  
})