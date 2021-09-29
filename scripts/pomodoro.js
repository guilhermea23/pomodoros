let minutes = localStorage.getItem("sessionTime");
let seconds = "00";

document.getElementById("minutes").innerHTML = minutes
  .toString()
  .padStart(2, "0");
document.getElementById("seconds").innerHTML = seconds;

let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");

let minutes_storage = minutes - 1;
let seconds_storage = 59;

buttonStart.addEventListener("click", function () {
  buttonStart.hidden = true;
  buttonStop.hidden = false;

  let seconds_interval = setInterval(diminuirSegundos, 1000);
  console.log(minutes);

  minutes = minutes_storage.toString().padStart(2, "0");
  seconds = seconds_storage;

  function diminuirSegundos() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");
    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(seconds_interval);
        document.getElementById("done").innerHTML = "Pomodoro completo.";
        buttonStop.hidden = true;
        buttonStart.hidden = false;
      }
      seconds = 59;
      minutes = minutes - 1;
      document.getElementById("seconds").innerHTML = seconds;
      document.getElementById(
        "minutes"
      ).innerHTML = minutes.toString().padStart(2, "0");
    }
  }

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  buttonStop.addEventListener("click", function () {
    minutes_storage = document.getElementById("minutes").innerHTML;
    seconds_storage = document.getElementById("seconds").innerHTML;
    clearInterval(seconds_interval);
    buttonStop.hidden = true;
    buttonStart.hidden = false;
  });
});
