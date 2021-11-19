//let hoursElement = document.getElementById('hours');
//let minutesElement = document.getElementById('minutes');
//let secondsElement = document.getElementById('seconds');


function currentMoment(){
let currentTime = new Date();  //current date and time
console.log(currentTime);

//hoursElement.innerHTML = timestamp.getHours();
//minutesElement.innerHTML = timestamp.getMinutes();
//secondsElement.innerHTML = timestamp.getSeconds();


console.log('Year:' + currentTime.getFullYear());//get current year
console.log('Month:' + currentTime.getMonth());//get current month
console.log('Date:' + currentTime.getDate());//get current date
console.log('Hours:' + currentTime.getHours());
console.log('Minutes:' + currentTime.getMinutes());
console.log('Seconds:' + currentTime.getSeconds());
console.log('Day:' + currentTime.getDay());
console.log('Time:' + currentTime.getTime());

return currentTime;
}


function targetMoment(){
    let targetDate = new Date(2022, 01, 01, 00, 30);
    console.log(targetDate);


    console.log('Year:' + targetDate.getFullYear());//get current year
    console.log('Month:' + targetDate.getMonth());//get current month
    console.log('Date:' + targetDate.getDate());//get current date
    console.log('Hours:' + targetDate.getHours());
    console.log('Minutes:' + targetDate.getMinutes());
    console.log('Seconds:' + targetDate.getSeconds());
    console.log('Day:' + targetDate.getDay());
    console.log('Time:' + targetDate.getTime());

    return targetDate;
}
function difference(date1, date2){
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 + 60 + 60 + 24));
    console.log(diffDays);
}

let now = currentTime();
let then = targetDate();

difference(now, then)

targetMoment()

//setInterval(currentmoment,5000);//how to call a function at regular interval
currentMoment();