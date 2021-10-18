const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};


// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
    return this.tax * salary;
}

// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
function getMySalary() {
    const range = 2000 - 1500;
    const salary = Math.floor(1500 + Math.random() * range).toFixed(2);
    const taxes = Number(this.tax * salary).toFixed(2);
    const profit = Number(salary - taxes).toFixed(2);
    return {
        salary: salary,
        taxes: taxes,
        profit: profit
    }
}


console.log(`Функція getMyTaxes.call for Ukraine with salary 5000: ${getMyTaxes.call(ukraine, 5000)}`);
console.log(`Функція getMyTaxes.call for Latvia with salary 5000: ${getMyTaxes.call(latvia, 5000)}`);
console.log(`Функція getMyTaxes.call for Litva with salary 5000: ${getMyTaxes.call(litva, 5000)}`);
console.log(`-/-`);
console.log(`Функція getMiddleTaxes.call for Ukraine: ${getMiddleTaxes.call(ukraine)}`);
console.log(`Функція getMiddleTaxes.call for Latvia: ${getMiddleTaxes.call(latvia)}`);
console.log(`Функція getMiddleTaxes.call for Litva: ${getMiddleTaxes.call(litva)}`);
console.log(`-/-`);
console.log(`Функція getTotalTaxes.call for Ukraine: ${getTotalTaxes.call(ukraine)}`);
console.log(`Функція getTotalTaxes.call for Latvia: ${getTotalTaxes.call(latvia)}`);
console.log(`Функція getTotalTaxes.call for Litva: ${getTotalTaxes.call(ukraine)}`);
console.log(`-/-`);
console.log("Функція getMySalary.call for 3 countries:");
setInterval(() => console.log(getMySalary.call(ukraine)), 10000);
setInterval(() => console.log(getMySalary.call(latvia)), 10000);
setInterval(() => console.log(getMySalary.call(litva)), 10000);