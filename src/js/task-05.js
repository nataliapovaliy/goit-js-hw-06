const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
    // if (event == undefined) {
    //     nameOutput.textContent = "Anonymous";
    //     console.log(nameOutput);
    // }
    
})




// ??????????? якщо інпут порожній

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name - output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
