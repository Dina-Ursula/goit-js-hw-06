const inputName = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

const defaultText = spanOutput.textContent;
inputName.addEventListener("input", inputValue);
function inputValue(evt) {
  //   if (evt.currentTarget.value !== "") {
  //     return (spanOutput.textContent = evt.currentTarget.value);
  //   }
  //   return (spanOutput.textContent = defaultText);
  // }
  spanOutput.textContent =
    evt.currentTarget.value !== "" ? evt.currentTarget.value : defaultText;
}

// inputName.addEventListener("focus", onFocus);
// inputName.addEventListener("blur", onBlur);

// function onFocus() {
//   console.log("інпут в фокусі");
// }
// function onBlur() {
//   console.log("інпут в блюрі");
