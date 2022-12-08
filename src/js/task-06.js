const validInput = document.querySelector('#validation-input');
const totalValid = validInput.dataset.length;

let counter = 0;

validInput.addEventListener("input", (event) => {
    let elementInput = event.currentTarget.value;
    counter += 1;
})

validInput.addEventListener("blur", () => {
    if (counter == totalValid) {
        validInput.style.borderColor = "#4caf50";
    } else {
        validInput.style.borderColor = "#f44336";
    }
})



// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.