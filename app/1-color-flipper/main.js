let myButton = document.getElementById('color-generator');
console.log(document);
console.log(document.getElementById);

myButton.addEventListener('click',function(){
  let bodyTag = document.getElementById('body-tag');
  bodyTag.style.backgroundColor = generateRandomColor();
});

function getRandomInt(min, max){
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomColor(){
    let red, green, blue, style;

    red = getRandomInt(0, 255);
    green = getRandomInt(0, 255);
    blue = getRandomInt(0, 255);

    style = 'rgb(' + red + ' ' + green + ' ' + blue + ')'
     
    return style;
}