const body           =  document.querySelector('body');
const listItems      =  document.getElementsByClassName('color');
const listItemsQuery =  document.querySelector(".menu")
// Add events to li's
const arr = [...listItems].forEach(listItem => {
  const color = listItem.innerHTML;
  listItem.style.background = color;
  listItem.addEventListener("click", changeBackground);
});
// Change background
function changeBackground() {
    const choice   = this.style.backgroundColor;
    body.style.background = choice;
    // Annoying way to close menu after choice
    const btn      = document.querySelector('button');
    const target   = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', !expanded);
    target.hidden  = expanded;
}
// Open/Collapse menu
(function() {
    const uls = document.querySelectorAll('ul');
    Array.prototype.forEach.call(uls, ul => {
      const btn = ul.querySelector('button')
      const target = btn.nextElementSibling
      btn.onclick = () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true' || false
        btn.setAttribute('aria-expanded', !expanded)
        target.hidden = expanded    
      }
    })
})()