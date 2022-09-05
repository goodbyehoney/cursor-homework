    // 1. Функція повернення масиву рандомних чисел

    function getRandomArr(length, min, max) {
    const SOMEARRAY = [];
    for (let i = 0; i < length; i++) {
        SOMEARRAY.push(Math.floor(Math.random() * (max + 1 - min)) + min);
    }
    return SOMEARRAY;
    }

    console.log('1. Функція повернення масиву рандомних чисел:', getRandomArr(15, 1, 100));

    // 2. Функція фільтрує парні числа передані як аргументи функції, виводить лише непарні

    function filterEvenNumbers(...numbers) {
    let SOMEARRAY = numbers.filter((element) => element % 2);
    return SOMEARRAY;
    }

    console.log('2. Функція фільтрує парні числа передані як аргументи функції, виводить лише непарні:', filterEvenNumbers(-1, 4, 8, 6, 3, 5));

    // 3. Функція-цензор

    let badWordsArray = ["shit", "fuck"];

    const replaceBadWords = (str) => {
    for (let i = 0; i < badWordsArray.length; i++) {
        const badWord = badWordsArray[i];
        if (str.includes(badWord)) {
        return replaceBadWords(str.replace(badWord, "*".repeat(badWord.length)));
        }
    }
    return str;
    };

    console.log('3. Функція-цензор:', replaceBadWords("Are you fucking kidding"));
    console.log('3. Функція-цензор:', replaceBadWords("It's bullshit!"));

    // 4. Функція, яка порахує кількість чисел більших 0 та поверне їх кількість

    function countPositiveNumbers (...numbers) {
        let someArray = numbers.filter (element => element > 0).length;
            return someArray;
    }

    console.log('4. Функція, яка порахує кількість чисел більших 0 та поверне їх кількість:', countPositiveNumbers(-1,2,3,4,-6));

    // 5. Функція, яка відфільтрує усі елементи та залишить виключно ті, які діляться на ціло на 5

    function getDividedByFive (...numbers) {
    return numbers.filter(element => (element % 5) == 0);
    }
    console.log('5. Функція, яка відфільтрує усі елементи та залишить виключно ті, які діляться на ціло на 5:', getDividedByFive(5, 33, 21, 105, 75, 45, 8, 103));

    // 6. Функція, яка рахує медіану всіх переданих в неї аргументів

    function getMedian (...numbers) {
    
    let arr = numbers.filter(element => (Number.isInteger(element)));
        arr.sort((a, b) => (a - b));
    let partArr = arr.length / 2;
    let med =0;
        if (Number.isInteger(partArr)) {
            med = (arr[partArr -1] + arr[partArr]) / 2;
        } else med = arr[Math.floor(partArr)];
        return med;
    }
    console.log('6. Функція, яка рахує медіану всіх переданих в неї аргументів:', getMedian(6, 10, 19, 24, 55, 87, 99, 0.67, 0.99, 345));