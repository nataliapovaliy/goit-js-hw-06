const divControls = document.querySelector("#controls");
const divBoxes = document.querySelector("#boxes");
const inputAmount = document.querySelector("input");
const dataBtnCreate = divControls.querySelector('button[data-create]');
const dataBtnDestroy = divControls.querySelector('button[data-destroy]');
let size = 30;
let amount = 0;

dataBtnCreate.addEventListener("click", createBoxes);
dataBtnDestroy.addEventListener("click", destroyBoxes);

  inputAmount.addEventListener("change", () => {
    return amount = inputAmount.value;
  })

function createBoxes() {
  for (let i = 1; i <= Number(amount); i++) {
    const divEl = document.createElement('div');
    divEl.id = `divnumber${i}`
    divEl.style.width = `${size}px`
    divEl.style.height = `${size}px`
    divEl.style.backgroundColor = `${getRandomHexColor()}`
    divBoxes.append(divEl);
    size += 10;
  }
}

function destroyBoxes() {
  for (let i = 1; i <= Number(amount); i++) {
    let elem = divBoxes.querySelector("div")
    elem.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input 
// і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount),
//   яка приймає один параметр - число.
//   Функція створює стільки < div >, скільки вказано в amount 
//   і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим 
// і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.