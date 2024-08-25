const buttonsDigit = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let displayData = "";

buttonsDigit.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('value');
        console.log(buttonValue, " was clicked!!");
    })
})
