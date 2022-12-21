const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");
decrBtn.addEventListener("click", decrementQuantity);
incrBtn.addEventListener("click", incrementQuantity);
let counterValue = 0;
function incrementQuantity(evt) {
  console.log(evt);
  counterValue += 1;

  spanValue.textContent = counterValue;
}
function decrementQuantity(evt) {
  console.log(evt);
  counterValue -= 1;

  spanValue.textContent = counterValue;
}
