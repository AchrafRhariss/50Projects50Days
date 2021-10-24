const questionList = document.getElementsByClassName('question');

for(let i=0; i<questionList.length; i++) {
    questionList[i].lastElementChild.firstElementChild.addEventListener('click', function (e) {
        questionList[i].classList.toggle('active');
        if(this.classList.contains('fa-chevron-down')) {
            this.classList.remove('fa-chevron-down');
            this.classList.add('fa-times');
        } else {
            this.classList.remove('fa-times');
            this.classList.add('fa-chevron-down');
        }
    })
}