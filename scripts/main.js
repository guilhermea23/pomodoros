let minutes = 25;
let seconds = "00";
const comecar = 'Começar!';
var sound = new Audio('../assets/ragnarok-online-level-up-sound.mp3');

document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

document.getElementById("buttonStart").innerHTML = comecar;

let buttonStart = document.getElementById("buttonStart");
let buttonPause = document.getElementById("buttonStop");

var minutes_storage = 0;
var seconds_storage = 10;

buttonPause.innerHTML = 'Pause';

buttonStart.addEventListener("click", function() {
  buttonStart.hidden = true;
  buttonPause.hidden = false;
  var minutes_interval = setInterval(minutesDecres, 60000);
  var seconds_interval = setInterval(secondsDecres, 1000);
  
  minutes = minutes_storage;
  seconds = seconds_storage;

  function minutesDecres() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  }

  function secondsDecres() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.getElementById("done").innerHTML ="Pomodoro completo! Faça um intervalo!";
        buttonPause.hidden = true;
        buttonStart.hidden = true;
        sound.play();
      }
      seconds = 60
    }
  }

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  buttonPause.addEventListener("click", function () {
    minutes_storage = document.getElementById("minutes").innerHTML;
    seconds_storage = document.getElementById('seconds').innerHTML;
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    buttonPause.hidden = true;
    buttonStart.hidden = false;
  });
});
