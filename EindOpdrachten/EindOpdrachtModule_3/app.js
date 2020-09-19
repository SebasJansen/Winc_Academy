const body           =  document.querySelector('body');
const listItems      =  document.getElementsByClassName('color');
const listItemsQuery =  document.querySelector(".menu")
const menu           =  document.querySelector(".menu-items")
// Add events to li's
const arr = [...listItems].forEach(listItem => {
  const color = listItem.innerHTML;
  listItem.style.background = color;
  listItem.addEventListener("click", changeBackground);
});
listItemsQuery.addEventListener("click", () => {
  menu.classList.toggle('menuToggle');
});
// Change background
function changeBackground() {
    const choice   = this.style.backgroundColor;
    body.style.background = choice;
}