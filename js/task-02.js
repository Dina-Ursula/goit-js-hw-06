const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const liCreate = options => {
  return options.map(option => {
    const newLi = document.createElement('li');
    newLi.classList.add('item');
    newLi.textContent = option;

    return newLi;
  });
};
  
const elements = liCreate(ingredients);
list.append(...elements);
console.log(list);