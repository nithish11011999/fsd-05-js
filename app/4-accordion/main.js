let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);

/*function printMe(item){
    console.log(item);
}

printMe('hello');//It will pass this argument to above function and print 'hello'

console.log(printMe);//It will execute the whole function*/

function hideAllQuestionText(){
    let questionTexts = document.querySelectorAll('.question-text');
    console.log(questionTexts);
    questionTexts.forEach(function(questionText){
        questionText.style.display = 'none';
    });
}

function printMe(button){
    button.addEventListener('click',function(){
      
    // Select nearest question-text
    let currentElement = this;
        questionWrapperElement = currentElement.parentNode.parentNode,
        questionTextElement = questionWrapperElement.querySelector('.question-text');
     
       console.log(questionTextElement);
       
       // hide all question-text
       hideAllQuestionText();

       //apply display: block; to that element
       questionTextElement.style.display = 'block';
    });
  
}


buttons.forEach(printMe);