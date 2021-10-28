const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  let root = document.body;

  isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");

  root.classList.toggle("lightMode");
}
