import '../styles/style.css'

import { getRandomeIntegerNumber } from '../scripts/hw3';

function createElementContent(parent) {
    let element = document.createElement('div');
    parent.append(element);
    element.classList.add('content');
    return element;
};

createElementContent(document.body.querySelector('.hw-3')).innerHTML = `Функція, яка повертає випадкове ціле число в діапазоні від N до M. Рандомне число від 1 до 500. Ваш результат: ${getRandomeIntegerNumber (1, 500)}`