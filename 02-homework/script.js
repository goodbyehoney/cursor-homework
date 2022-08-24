
    alert(`Привіт! Дякую, що виділив час для ревью моєї роботи :-)`)

    let firstNumber = +prompt(`Будь ласка, введіть початкове число:`);
    while (!Number.isInteger(firstNumber) || Number(firstNumber) == '' || (firstNumber % 1 === 0) {
        firstNumber = +prompt(`Упс, щось пішло не так. Введіть, будь ласка, ціле число, наприклад: 1, 2, 40, 145`)
    }

    let lastNumber = +prompt(`Будь ласка, введіть кінцеве число:`);
    while (!Number.isInteger(lastNumber) || Number(lastNumber) == '' || (lastNumber % 1 === 0) {
        lastNumber = +prompt(`Упс, щось пішло не так. Введіть, будь ласка, ціле число, наприклад: 1, 2, 40, 145`)
    }

    while ((Number(firstNumber)) >= (Number(lastNumber))) {
        firstNumber = +prompt(`Мені сумно :( але Ваше початкове число >= Вашому кінцевому числу`)
        lastNumber = +prompt(`Мені сумно :( але Ваше кінцеве число >= Вашому початковому числу`)
    }

    let pairOr = confirm(`Ви не проти, якщо я проігнорую всі парні числа?`);
    let generalSum = 0;

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (pairOr && i % 2 == 0) {
            continue
        }
        else {
            generalSum += i;
        }
    }

    if (pairOr) {
        document.writeln(`Я підрахував, що сума непарних чисел в заданому Вами діапазоні дорівнює: ${generalSum}`)
    }
    if (!pairOr) { // тут напевно було логічніше взяти просто через else, але чомусь вирішив, що так буде правильно також;
        document.writeln(`Я підрахував, що сума всіх чисел в заданому Вами діапазоні дорівнює: ${generalSum}`)
        }
    
