const validInput = document.querySelector('#validation-input');
const totalValid = validInput.dataset.length;
const styleValid = document.querySelector('#validation-input.valid');
const steleInvalid = document.querySelector('#validation-input.invalid');
let counter = 0;

validInput.addEventListener("input", (event) => {
    let elementInput = event.currentTarget.value;
    // console.log(event.currentTarget.value);
    counter += 1;
    // console.log(counter);
})

validInput.addEventListener("blur", () => {
    console.log('itog', counter);
    console.log('length', totalValid);
    if (counter == totalValid) {
        // validInput.style.currentTarget.value(#validation-input.valid);
        validInput.style.borderColor = "#4caf50";
        validInput.style = styleValid;
        console.log('Valid');
    } else {
        validInput.style.borderColor = "#f44336";
        console.log('invalid');
    }
})



// ???????? Как правильно сделать border-color

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

//  <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
//  > 

// Яка кількість символів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }