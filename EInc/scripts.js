function displayPop(){
    document.getElementById('popup').style.display = "block";
}
setTimeout(displayPop, 10000);

function closePop(){
    document.getElementById('popup').style.display = "none";
}

var endDate = new Date("Mar 15, 2023 23:59:59").getTime();

var timer = setInterval(function() {

    var now = new Date().getTime();
      
    var difference = endDate - now;
    
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds < 0) {
      clearInterval(timer);
      document.getElementById("wrap").style.display = 'none';
      document.getElementById("time").style.display = 'block';
    }
},1000);