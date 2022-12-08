const fontSizeControl = document.querySelector('#font-size-control');
const textChangeFontSize = document.querySelector('#text');

fontSizeControl.addEventListener("input", (event) => {
    let elementInput = event.currentTarget.value;
    textChangeFontSize.style.fontSize = `${event.currentTarget.value}px`;
})


// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і 
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.