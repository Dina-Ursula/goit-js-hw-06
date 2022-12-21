const itemEl = document.querySelector("#categories");

const listItemEl = itemEl.children;
console.log(`Number of categories: ${listItemEl.length}`);

for (let i = 0; i < listItemEl.length; i += 1) {
  const element = listItemEl[i];
  console.log(`Category: ${element.firstElementChild.textContent}`);

  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
