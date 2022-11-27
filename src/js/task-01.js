const listWithId = document.querySelector('#categories');
const totalCategory = listWithId.querySelectorAll(".item");
console.log(`Number of categories: `, totalCategory.length);

for (const i of totalCategory) {
    const itemTitle = i.firstElementChild;
    console.log(`Category:`, itemTitle.textContent);
    const itemEl = i.querySelectorAll("li") ;
    console.log(`Elements: `, itemEl.length);
}



// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5