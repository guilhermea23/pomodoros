var minutes = 25;
var seconds = "00";

function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function github() {
  window.open("https://www.github.com/guilhermea23", "_blank")
}

function play() {
  minutes = 0
  seconds = 5

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutes_interval = setInterval(minutesDecres, 60000);
  var seconds_interval = setInterval(secondsDecres, 1000);

  function minutesDecres() {
    minutes = minutes - 1
    document.getElementById("minutes").innerHTML = minutes
  }

  function secondsDecres() {
    seconds = seconds - 1
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.getElementById("done").innerHTML =
          "Pomodoro completo! Faça um intervalo!";
      }
      seconds = 60
    }
  }
}