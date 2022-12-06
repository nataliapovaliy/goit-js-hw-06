const validInput = document.querySelector('#validation-input');
const totalValid = validInput.dataset.length;
let counter = 0;

validInput.addEventListener("input", (event) => {
    const elementInput = event.currentTarget.value;
})

validInput.addEventListener("blur", (event) => {
    console.log(elementInput);
    // let validInputArray = elementInput.split("");
    // for (const i of validInputArray) {
    //     counter += 1;
    // }
    // console.log(counter);
})



// validInput.addEventListener("click", () => {
//     validInput.focus();
//     const validInputArray = validInput.split("");
// })
// console.log(validInputArray);


// if (validInput.blur()) {
//     const validInputArray = validInput.split("");
//     for (const i of validInputArray) {
//         counter += 1;
//     }
//     console.log(counter);
//     if (counter === totalValid) {

//     }
// }


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