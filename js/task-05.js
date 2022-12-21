const inputName = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

inputName.addEventListener("input", inputValue);
function inputValue(evt) {
  spanOutput.textContent = evt.currentTarget.value;
}

inputName.addEventListener("focus", onFocus);
inputName.addEventListener("blur", onBlur);

function onFocus() {
  console.log("інпут в фокусі");
}
function onBlur() {
  console.log("інпут в блюрі");
}
