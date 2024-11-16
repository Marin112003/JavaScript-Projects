const colorButton = document.querySelector(".color-button");
const bodyEl = document.querySelector("body");
const containerEl = document.querySelector(".container");
let standardColors = document.querySelector(".standard-colors");
let allShades = document.querySelector(".all-shades");
const buttonClose = document.querySelector(".button-close");
const introductionWindow = document.querySelector(".intrduction");
const colorDiv = document.createElement("div");
colorDiv.className = "color-div";

containerEl.appendChild(colorDiv);

const colors = [
  "yellow",
  "orange",
  "red",
  "violet",
  "blueviolet",
  "blue",
  "green",
  "yellowgreen",
];

function randomNum() {
  return Math.floor(Math.random() * 255);
}

standardColors.addEventListener("click", () => {
  standardColors = true;
  allShades = false;
});

allShades.addEventListener("click", () => {
  allShades = true;

  standardColors = false;
});

colorButton.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  if (standardColors == true) {
    bodyEl.style.backgroundColor = colors[randomColor];

    colorDiv.textContent = colors[randomColor];
  } else if (allShades == true) {
    const color = `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;

    bodyEl.style.backgroundColor = color;

    colorDiv.textContent = color;
  }
});

buttonClose.addEventListener("click", ()=> {
  introductionWindow.style.display = "none";
})