let inputEl = document.querySelector(".input");
const operationButtons = document.querySelector(".operation-buttons");
const numberContainer = document.querySelector(".number-container");
const dotButton = document.querySelector(".btn-dot");
const equalButton = document.querySelector(".btn-equal");
const ereaseButton = document.querySelector(".btn-erease");

numberContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("numbers")) {
    inputEl.value += e.target.innerText;
  }
});

dotButton.addEventListener("click", (e) => {
  let lastNum = inputEl.value.split(/[\+\-\*\/÷]/).pop();

  if (lastNum.includes(".")) {
    return;
  }

  if (e.target.className.toLowerCase() === "btn-dot") {
    inputEl.value += e.target.innerText;
  }
});

operationButtons.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "button") {
    inputEl.value += e.target.innerText;
  }
});

equalButton.addEventListener("click", () => {
  inputEl.value = eval(inputEl.value);
});

ereaseButton.addEventListener("click", () => {
  inputEl.value = "";
});
