const a = document.querySelector(".welcome-main-select");
const x = document.querySelector(".x");
const o = document.querySelector(".o");

a.addEventListener("click", (e) => {
  if (e.target.innerText == "O") {
    x.classList.remove("selected");
    o.classList.add("selected");
  } else {
    o.classList.remove("selected");
    x.classList.add("selected");
  }
});
