    // Функція, яка визначає ступінь числа

    function getNumberDegree (number, degree) {
        let finalResult = number;
        for (let x = 1; x < degree; x++) {
        finalResult = finalResult * number;
    }
        return finalResult;
    }
    document.writeln(`1. Функція, яка визначає ступінь числа. Число 8 в 10 ступені. Ваш результат: ${getNumberDegree (8, 10)} <br> <hr> `)

    // Функція, яка повертає випадкове ціле число в діапазоні від N до M.

    function getRandomeIntegerNumber (min, max) {
        let N = min;
        let M = max;

        return Math.floor(Math.random() * (M - N + 1)) + N;
    }

    document.writeln(`2. Функція, яка повертає випадкове ціле число в діапазоні від N до M. Рандомне число від 1 до 500. Ваш результат: ${getRandomeIntegerNumber (1, 500)} <br> <hr> `)

    // Функцію, яка рахує скільки разів певна буква повторюється в слові.

    function countSomeLetter (letter, word) {
        let someCounter = 0;

        for (let x = 0; x < word.length; x++) {
            if (word.charAt(x) == letter) {
                someCounter += 1;
            }
        }
        return someCounter;
    }
    document.writeln(`3. Функція, яка рахує скільки разів певна буква повторюється в слові. Слово "minnesota", буква "n". Ваш результат: ${countSomeLetter('n', 'minnesota')} <br> <hr>  `)

    // Функція генерації випадкового паролю (тільки числа), довжина по замовчуванню = 8 символам.

   function generatePassword() {
        let lenght = 8;
        charset = "0123456789";
        randomePassword = '';
        for (let i = 0, length = charset.length; i < length; ++i) {
            randomePassword += charset.charAt(Math.floor(Math.random() * n));
        }
        return randomePassword;
    }
    document.writeln(`4. Функція генерації випадкового паролю (тільки числа), довжина по замовчуванню = 8 символів. Ваш новий пароль: ${generatePassword()} <br> <hr>  `)

    // Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

    function mySalaryIsTires (ourSalary, tax) {
        mySalaryIsTires = ourSalary - (ourSalary / 100) * tax; {
            return mySalaryIsTires
        }
    }
    document.writeln(`5. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. Наша ЗП = 5000, наш податок = 19.5%. Ваш результат: ${mySalaryIsTires(5000, 19.5)} <br> <hr>  `)

    // Функція, яка форматує ім'я, роблячи першу букву великою.

    function wordNormalize (word = "") {
        wordNormalize = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); {
            return wordNormalize;
        }
    }
    document.writeln(`6. Функція, яка форматує ім'я, роблячи першу букву великою. Наше слово: hArry. Ваш результат: ${wordNormalize("hArry")} <br> <hr>  `)

    // Функція, перевірки строки на паліндром.

    function checkPalindrom (str) {
        return str.toLowerCase() == str.split('').reverse().join('').toLowerCase();
    }
    document.writeln(`7. Функція, перевірки строки на паліндром. Наш паліндром: "Зараз". Ваш результат: ${checkPalindrom("Зараз")}`)
