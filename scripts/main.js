let minutes = 25;
let seconds = "00";
const comecar = 'Começar!';

document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

document.getElementById("buttonStart").innerHTML = comecar;

let button = document.getElementById("buttonStart");
let button2 = document.getElementById("buttonStop");

button2.innerHTML = 'Pause';

button.addEventListener("click", function() {
  button.hidden = true;
  button2.hidden = false;
  var minutes_interval = setInterval(minutesDecres, 60000);
  var seconds_interval = setInterval(secondsDecres, 1000);
  
  minutes = 24
  seconds = 59

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

        document.getElementById("done").innerHTML ="Pomodoro completo! Faça um intervalo!";
      }
      seconds = 60
    }
  }

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  button2.addEventListener("click", function () {
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    button2.hidden = true;
    button.hidden = false;
  });
});
