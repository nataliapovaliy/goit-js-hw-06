const listCounter = document.querySelector('#counter');
const clickEl = listCounter.querySelector('button');
const counterClickValue = document.querySelector('#value');

let counterValue = 0;

function counterDecrement () {
    counterValue -= 1;
    counterClickValue.textContent = counterValue;
};

function counterIncrement() {
    counterIncrement += 1;
    counterClickValue.textContent = counterValue;
};

clickEl.addEventListener("click", counterDecrement);
clickEl.addEventListener("click", counterIncrement);



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