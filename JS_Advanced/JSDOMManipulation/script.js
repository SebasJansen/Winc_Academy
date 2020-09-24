const bigFiveButtons = document.getElementsByClassName("big-five-button");
const removeFirstButton = document.querySelector("#remove-first-item-button");
const removeAllButton = document.querySelector("#remove-all-button");
let listItemsQuery =  document.querySelector("#spotted-animals-list");
console.log(bigFiveButtons);
console.log(listItemsQuery.innerHTML);
console.log(removeFirstButton);
console.log(removeAllButton);
const addSpotted = (button) => {
    const value = (button.target.textContent);
    listItemsQuery.innerHTML += (`<li class="spotted-animals-list-item">` + value + `</li>`);
};
const removeFirstItem = () => {
    let listItems =  document.querySelectorAll(".spotted-animals-list-item");
    let listItemsQuery =  document.querySelector("#spotted-animals-list");
    listItemsQuery.removeChild(listItems[0]);
};
const removeAll = () => {
    let listItems =  document.querySelectorAll(".spotted-animals-list-item");
    let listItemsQuery =  document.querySelector("#spotted-animals-list");
    listItems.forEach(listItem => {
        listItemsQuery.removeChild(listItem);
    });
};
const addBigFiveEvent = [...bigFiveButtons].forEach(button => {
    button.addEventListener("click", addSpotted);
});
const addRemoveFirstEvent = [removeFirstButton].forEach(button => {
    button.addEventListener("click", removeFirstItem);
});
const addRemoveAllEvent = [removeAllButton].forEach(button => {
    button.addEventListener("click", removeAll);
});