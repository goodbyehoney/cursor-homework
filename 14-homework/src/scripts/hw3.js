
export function getRandomeIntegerNumber (min, max) {
    let N = min;
    let M = max;

    return Math.floor(Math.random() * (M - N + 1)) + N;
};