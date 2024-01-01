function updateCountdown(d) {
  // Get the target date and the cirrent date, and turn them into time
  var date = new Date(d).getTime();
  var current = new Date().getTime();
  
  // Negate the target time by the current time
  var t = date - current;
  
  // Make value elements for the countdown
  var d = Math.floor(t / (1000 * 60 * 60 * 24));
  var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((t % (1000 * 60)) / 1000);
  var ss = Math.floor((t / (1000 * 60)) / 1000);
  
  if (d < 1) {
    document.getElementById("bg").style.backgroundColor = "#002";
  }
  
  // if statements for the countdown
  if (s < 1 && m < 1 && h < 1 && d < 1 ) {
    document.getElementById("year").style.animation = "yellowfade 5s infinite alternate linear";
    document.getElementById("panel").style.animation = "none";
    document.getElementById("label").innerHTML = "2024 came to it's very own end. Hope this year will be a better one!<br><sm>You may now leave this page:)</sm>";
    document.getElementById("bg").style.backgroundColor = "#000";
    document.getElementById("panel").style.backgroundColor = "#3F3F3F";
    document.getElementById("panel").style.color = "#FFFFFF";
    document.getElementById("panel").style.textShadow = "0 0 5px #FFFFFF, 0 0 25px #FFFFFF"
    
    return "HAPPY NEW YEAR 2025!!";
  }
  
  if (s < 59 && m < 1 && h < 1 && d < 1) {
    document.getElementById("bg").style.backgroundColor = "#001";
  }
  
  if (s < 30 && m < 1 && h < 1 && d < 1) {
    document.getElementById("bg").style.backgroundColor = "#000";
    document.getElementById("year").style.animation = "darkyellowfade 5s infinite alternate linear";
    document.getElementById("panel").style.backgroundColor = "#3F3F3F";
    document.getElementById("panel").style.animation = "timer 1s infinite";
  }
  
  return d + " days, " + h + " hours, " + m + " minutes, and " + s + " seconds left";
};

// Load the functions on load
window.onload = function() {
  setInterval(() => {
    document.getElementById("countdown").innerHTML = updateCountdown("Jan 1, 2025 00:00:00 GMT-500");
  })
}