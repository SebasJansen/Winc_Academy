const button = document.getElementById('mybutton');
const backgroundButton = document.getElementById('backgroundbutton');
button.addEventListener('click', function () {
    console.log('button clicked');
})
backgroundButton.addEventListener('click', function toggleColor() {
    const body = document.querySelector('body');
    console.log(body.classList);
    if (body.classList.contains("red-background")) {
        body.classList.toggle("red-background")
    }
    else{
        body.classList += (" red-background");
    }
})