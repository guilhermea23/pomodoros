let sessionTimeSubmit;

const form = document.getElementById("form");

localStorage.setItem("sessionTime", 25);
localStorage.setItem("breakTime", 5);

const sessionTime = document.getElementById("sessionTime");
sessionTime.addEventListener("change", function (evento) {
  sessionTimeSubmit = evento.target.value;
  localStorage.setItem("sessionTime", sessionTimeSubmit);
});

form.addEventListener("submit", function () {
  form.action = "pomodoro.html";
});
  