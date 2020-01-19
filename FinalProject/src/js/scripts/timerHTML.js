

export function timerHTML(start = '', end = "Jan 5, 2021 15:37:25", id = "timer") {
var countDownDate = new Date(end).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

 // Get today's date and time
 var now = new Date().getTime();

 // Find the distance between now and the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in the element with id="demo"
 document.getElementById(id).innerHTML =`До конца акции осталось:  ${days} дней, ${hours} часов,  ${minutes}  минут,  ${seconds}  секунд` ;

 // If the count down is finished, write some text
 if (distance < 0) {
   clearInterval(x);
   document.getElementById(id).innerHTML = "Акция закончилась";
 }
}, 1000);
}
