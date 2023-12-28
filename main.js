function updateCountdown(d) {
  var date = new Date(d).getTime();
  var current = new Date().getTime();
  
  var t = date - current;
  
  var d = Math.floor(t / (1000 * 60 * 60 * 24));
  var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((t % (1000 * 60)) / 1000);
  
  if (t < 2) {
    document.getElementById("year").style.animation = "colorfade 2.5s infinite alternate linear";
    document.getElementById("label").innerHTML = "Hope this year will be a great year!!";
    document.getElementById("bg").style.backgroundColor = "#000";
    document.getElementById("panel").style.boxShadow = "0 0 5px, #FFFFFF80, 0 0 25px #FFFFFF80";
    
    return "HAPPY NEW YEAR 2024!!";
  }
  
  return d + " days, " + h + " hours, " + m + " minutes, and " + s + " seconds left";
}
;
window.onload = function() {
  setInterval(() => {
    document.getElementById("countdown").innerHTML = updateCountdown("Jan 1 2024 00:00:00 GMT-500");
  })
}