const listCounter = document.querySelector('#counter');
const elDecrement = listCounter.querySelector('button[data-action="decrement"]');
const elIncrement = listCounter.querySelector('button[data-action="increment"]');
const counterClickValue = listCounter.querySelector('#value');

let counterValue = 0;

function counterDecrement() {
    counterValue -= 1;
    counterClickValue.textContent = counterValue;
    };

function counterIncrement() {
    counterValue += 1;
    counterClickValue.textContent = counterValue;
};

elIncrement.addEventListener("click", counterIncrement);
elDecrement.addEventListener("click", counterDecrement);




// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


// <div id="counter">
//  <button type="button" data-action="decrement">-1</button>
//  <span id="value">0</span>
//  <button type="button" data-action="increment">+1</button>
// </div>