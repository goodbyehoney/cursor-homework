const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//
const women = [];
const men = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].lastIndexOf('а') === students[i].length - 1) {
        women.push(students[i]);
    } else {
        men.push(students[i]);
    }
}

const studentsPairs = [];
for (let i = 0; i < women.length; i++) {
    studentsPairs.push([men[i], women[i]]);
}
console.log(studentsPairs);

const studentsPlusThemes = [];
for (let i = 0; i < themes.length; i++) {
    studentsPlusThemes.push([men[i] + ' та пані ' + women[i] + '. Отримують тему: ' + themes[i]]);
}
console.log(studentsPlusThemes);

const studentsPlusMarks = [];
for (let i = 0; i< marks.length; i++) {
    studentsPlusMarks.push([students[i], marks[i]]);
}
console.log(studentsPlusMarks);

const studentsPlusMarksPlusThemes = [];

function getRandomMark(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < themes.length; i++) {
    studentsPlusMarksPlusThemes.push([men[i] + ' та пані ' + women[i] + '. Тема: ' + themes[i] + '. Оцінка: ' + getRandomMark(1, 5)]);
}
console.log(studentsPlusMarksPlusThemes);
