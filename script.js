

var countDownDate = new Date("Jan 5, 2023 15:37:5").getTime();


var x = setInterval(function() {
    var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000*60*60*24));
var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((distance % (1000*60*60)) / (100*60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("count_down").innerHTML = days + "D " +hours + "H " + minutes + "M  " + seconds + "S ";
document.getElementById("count_down2").innerHTML = days + "D " +hours + "H " + minutes + "M  " + seconds + "S ";

if (distance < 0) {
    clearInterval(x);
    document.querySelectorAll("count_down").innerHTML = "EXPIRED";
    document.querySelectorAll("count_down2").innerHTML = "EXPIRED";
}
}, 1000);

