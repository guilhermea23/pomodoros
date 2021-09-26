let minutes = 25;
let seconds = "00";

/* var sound = new Audio("../assets/ragnarok-online-level-up-sound.mp3"); */
function github() {
  window.open("https://www.github.com/guilhermea23", "_blank");
}
function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}



let buttonStart = document.getElementById("start");
let buttonPause = document.getElementById("stop");

var minutes_storage = 24;
var seconds_storage = 59;

console.log(buttonStart)


buttonStart.addEventListener("click", function () {
  console.log("Apertou o play");
  buttonStart.hidden = true;
  buttonPause.hidden = false;
  var minutes_interval = setInterval(minutesDecres, 60000);
  var seconds_interval = setInterval(secondsDecres, 1000);

  minutes = minutes_storage;
  seconds = seconds_storage;

  function minutesDecres() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
  }

  function secondsDecres() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.getElementById("done").innerHTML =
          "Pomodoro completo! Faça um intervalo!";
        buttonPause.hidden = true;
        buttonStart.hidden = true;
        sound.play();
      }
      seconds = 60;
    }
  }

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  buttonPause.addEventListener("click", function () {
    minutes_storage = document.getElementById("minutes").innerHTML;
    seconds_storage = document.getElementById("seconds").innerHTML;
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    buttonPause.hidden = true;
    buttonStart.hidden = false;
  });
});

/* function play() {
  minutes = 24
  seconds = 59

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
} */
