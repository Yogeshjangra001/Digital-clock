let hours = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");
let minku = document.getElementById("ampm");
let clock = document.getElementsByClassName("clock")

function time(){
   let date = new Date();
   let hour = date.getHours();
   let min = date.getMinutes();
   let sec = date.getSeconds();
   let yogi = "pm";

if(hour > 12){
   hour = hour - 12
}
hour = (hour < 10)? "0" + hour : hour;
min = (min < 10)? "0" + min : min;
sec = (sec < 10)? "0" + sec : sec;

  hours.innerHTML = hour + ":"
  minute.innerHTML = min + ":"
  second.innerHTML = sec;
  minku.innerHTML = yogi;

  setInterval(time,1000)
}

document.getElementById("name").innerText = "By Yogesh jangra"
   
