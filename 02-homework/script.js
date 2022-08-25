    alert(`Привіт! Дякую, що виділив час для ревью моєї роботи :-)`);

    let firstNumber;
    firstNumber = +prompt(`Будь ласка, введіть початкове число:`);
    while (!Number.isInteger(firstNumber) || firstNumber == '' || firstNumber < 0) {
        alert(`Упс, щось пішло не так. Введіть, будь ласка, ціле число, наприклад: 1, 2, 40, 145`);
        firstNumber = +prompt(`Будь ласка, введіть початкове число:`);
    }

    let lastNumber;
    lastNumber = +prompt(`Будь ласка, введіть кінцеве число:`);
    while (!Number.isInteger(lastNumber) || lastNumber == '' || lastNumber < 0) {
        alert(`Упс, щось пішло не так. Введіть, будь ласка, ціле число, наприклад: 1, 2, 40, 145`);
        lastNumber = +prompt(`Будь ласка, введіть кінцеве число:`);
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
