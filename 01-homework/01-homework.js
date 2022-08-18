
let apple = 15.678;
let orange = 123.965;
let cucumber = 90.2345;

// 1 Використовуючи вбудований об'єкт Math – виведіть максимальне число

console.log(Number(Math.max(apple, orange, cucumber))) 

// 2 Використовуючи вбудований об'єкт Math – виведіть мінімальне число

console.log(Number(Math.min(apple, orange, cucumber)))

// 3 Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

let sumOfItems = apple + orange + cucumber;

console.log(sumOfItems)

// 4 Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.


let sumOfItemsFull = Math.floor(apple) + Math.floor(orange) + Math.floor(cucumber);

console.log(sumOfItemsFull)

// 5 Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300) 
// Але не впевнений, що саме так це працює.

let roundedSum = Math.round(sumOfItems / 100) * 100;

console.log(roundedSum)

// 6 Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

let newBoolean = sumOfItemsFull % 2 === 0;

console.log(newBoolean)

// 7 Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

const amountClien = 500;
let sumOfItemsNormal = apple + orange + cucumber;
let clientChange = amountClien - Number(sumOfItemsNormal);

console.log(clientChange)

// 8 Виведіть середнє значення цін, округлене до другого знаку після коми

let appleFixedTwo = apple.toFixed(2);
let orangeFixedTwo = orange.toFixed(2);
let cucumberFixedTwo = cucumber.toFixed(2);

let averageItems = (Number(appleFixedTwo) + Number(orangeFixedTwo) + Number(cucumberFixedTwo)) / 3;

console.log(Number(averageItems.toFixed(2)));

// 9 (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).

let discountRandom = (Math.random().toFixed(2));

console.log(Number(discountRandom));

// 10 Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

let randomDiscountPrice = cucumber - discountRandom;

console.log(Number(randomDiscountPrice.toFixed(2)))

// 11 Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?


let appleTotal = (apple / 2) - (Number(discountRandom));

console.log(Math.round(appleTotal))

// 12 Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:

const CONTENT = `
1. максимальне число: ${Number(Math.max(apple, orange, cucumber))};
2. мінімальне число: ${Number(Math.min(apple, orange, cucumber))};
3. вартість всіх товарів: ${sumOfItems};
4. відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою: ${sumOfItemsFull};
5. сума товарів округлену до сотень: ${roundedSum}
6. чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом: ${newBoolean};
7. виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${clientChange};
8. виведіть середнє значення цін, округлене до другого знаку після коми: ${(Number(averageItems.toFixed(2)))};
9. cтворіть змінну, в якої збережіть випадкову знижку: ${Number(discountRandom)};
10. зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми: ${Number(randomDiscountPrice.toFixed(2))};
11. виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни: ${Math.round(appleTotal)};
`
console.log(CONTENT)