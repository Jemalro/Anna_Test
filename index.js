// Original Code By Webdevtrick ( https://webdevtrick.com )
function showTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
<<<<<<< HEAD
var time = h + ":" + m + ":" + s;
=======
var time = h + ":" + m + ":" + s + " " + session;
>>>>>>> d767809bbc29f8620c9ced70f0b8943350aaa0b9
document.getElementById("DigitalCLOCK").innerText = time;
document.getElementById("DigitalCLOCK").textContent = time;
setTimeout(showTime, 1000);
}
<<<<<<< HEAD
showTime();
=======
showTime();
>>>>>>> d767809bbc29f8620c9ced70f0b8943350aaa0b9
