var sessionTimeSubmit, breakTimeSubmit
const form = document.getElementById("form")

localStorage.setItem("sessionTime", 25)
localStorage.setItem("breakTime", 5)

const sessionTime = document.getElementById("sessionTime");

sessionTime.addEventListener("change", function (e) {
  sessionTimeSubmit = e.target.value;
  localStorage.setItem("sessionTime", sessionTimeSubmit)
  // TODO: arrumar pra armazenar os dados no localStorage no submit do form
})

const breakTime = document.getElementById("breakTime");
breakTime.addEventListener("change", function (e) {
  breakTimeSubmit = e.target.value;
  localStorage.setItem("breakTime", breakTimeSubmit)
  //TODO: arrumar pra armazenar os dados no localStorage no submit do form
})

form.addEventListener("submit", function (e) {
  form.action = 'pomodoro.html';
})

