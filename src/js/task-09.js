const widgetColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  widgetColor.style.backgroundColor = `${randomColor}`;
  spanColor.textContent = `${randomColor}`;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і 
//   виводить значення кольору в span.color.
//   Для генерування випадкового кольору 
// використовуй функцію getRandomHexColor.