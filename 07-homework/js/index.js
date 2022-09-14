const UKRAINE = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const LATVIA = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const LITVA = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

    // getMyTaxes.call(country, salary) -> number;

function getMyTaxes (salary) {
    return salary * this.tax
}
    console.log(getMyTaxes.call(UKRAINE, 1800));

    // getMiddleTaxes.call(country) -> number;

function getMiddleTaxes () {
    return this.middleSalary * this.tax
}
    console.log(getMiddleTaxes.call(LATVIA));

    // getTotalTaxes.call(country) -> number;

function getTotalTaxes () {
    return this.middleSalary * this.tax * this.vacancies
}
    console.log(getMiddleTaxes.call(LITVA));

    // getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 

function getMySalary () {
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxes = (this.tax * salary).toFixed(1);
    let profit = salary - taxes;
    let Obj = {
        salary,
        taxes,
        profit
    }
    return Obj;
}

setInterval(() => console.log(getMySalary.call(LITVA)), 10000);
