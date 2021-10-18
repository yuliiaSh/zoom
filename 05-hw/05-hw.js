function getIntegerFromUser(id) {
    let input = document.getElementById(id).value;
    if (input.length <= 0 || isNaN(input) || input == null) {
        alert("Введіть ціле число");
        return false;
    } else {
        return parseInt(input);
    }
}

function getStringFromUser(id) {
    let input = document.getElementById(id).value;
    if (typeof input === 'string' && isNaN(input)) {
        return input;
    } else {
        alert("Помилка! Спробуйте ще раз");
        return false;
    }
}

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(parseInt(str));
}

// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
function getRandomArray() {
    const length = getIntegerFromUser("task1_1");
    const min = getIntegerFromUser("task1_2");
    const max = getIntegerFromUser("task1_3");
    document.getElementById("showTask1").innerText = "Рандомний масив: " + createRandomArray(length, min, max);
}

function createRandomArray(length, min, max) {
    let randowArray = [];
    for (let i = 0; i < length; i++) {
        randowArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randowArray;
}

// Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
function getModa() {
    document.getElementById("showTask2").innerText = "Мода: " + mode(getStringFromUser("task2"));
}

function mode(digits) {
    let splittedValue = digits.split(",");
    let max = 0;
    let index = 0;
    let size = 100;
    let array = new Array(size).fill(0);
    for (let i = 0; i < splittedValue.length; i++) {
        if (isNormalInteger(splittedValue[i])) {
            let number = parseInt(splittedValue[i].trim());
            array[number] = array[number] + 1;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    return index;
}

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
function getAverage() {
    document.getElementById("showTask3").innerText = "Cереднє арифметичне: " + countAverage(getStringFromUser("task3"));
}

function countAverage(digits) {
    let splittedValue = digits.split(",");
    let sum = 0;
    for (let i = 0; i < splittedValue.length; i++) {
        if (isNormalInteger(splittedValue[i])) {
            sum = sum + parseInt(splittedValue[i].trim());
        }
    }
    return (sum / parseInt(splittedValue.length)).toFixed(1);
}

// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
function getMedian() {
    document.getElementById("showTask4").innerText = "Mедіана: " + median(getStringFromUser("task4"));
}

function median(digits) {
    let numbers = digits.split(",");
    let median = 0;
    const numbersLength = numbers.length;
    let numbersArray = [];
    for (let i = 0; i < numbersLength; i++) {
        if (isNormalInteger(numbers[i])) {
            numbersArray.push(parseInt(numbers[i].trim()));
        }
    }
    numbersArray.sort();
    let length = numbersArray.length;
    if (length % 2 === 0) {
        median = (numbersArray[length / 2 - 1] + numbersArray[length / 2]) / 2;
    } else {
        median = numbersArray[(length - 1) / 2];
    }
    return median;
}

// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
function getEvenNumbers() {
    const digits = getStringFromUser("task5");
    document.getElementById("showTask5").innerText = "Не парні числа: " + filterEvenNumbers(digits);
}

function filterEvenNumbers(digits) {
    let splittedValues = digits.split(",");
    let filterEvenNumbersArray = [];
    for (let i = 0; i < splittedValues.length; i++) {
        splittedValues[i] = splittedValues[i].trim();
        if (splittedValues[i] % 2 === 0 || isNormalInteger(splittedValues[i])) {
            continue;
        } else {
            filterEvenNumbersArray.push(splittedValues[i]);
        }
    }
    return filterEvenNumbersArray;
}

// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
function countPositiveNumbers() {
    const digits = getStringFromUser("task6");
    document.getElementById("showTask6").innerText = "Kількість чисел більших 0: " + createPositiveNumbersArray(digits).length;
}

function createPositiveNumbersArray(digits) {
    let array = digits.split(",");
    let positiveNumbersArray = [];
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].trim();
        if (array[i] > 0) {
            positiveNumbersArray.push(array[i]);
        }
    }
    return positiveNumbersArray;
}

// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
function getDividedByFive() {
    const digits = getStringFromUser("task7");
    document.getElementById("showTask7").innerText = "Діляться на 5: " + filterDividedByFiveNumbers(digits);
}

function filterDividedByFiveNumbers(digits) {
    let splittedValues = digits.split(",");
    let filteredArray = [];
    for (let i = 0; i < splittedValues.length; i++) {
        splittedValues[i] = parseInt(splittedValues[i].trim());
        if (splittedValues[i] % 5 === 0) {
            filteredArray.push(splittedValues[i]);
        } else {
            continue;
        }
    }
    return filteredArray;
}

// Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"
function getReplacedBadWords() {
    document.getElementById("showTask8").innerText = "Фраза: " + replaceBadWords(getStringFromUser("task8"));
}

function replaceBadWords(text) {
    let badWordsArray = ["shit", "fuck"];
    let splittedText = text.split(" ");
    for (let i = 0; i < splittedText.length; i++) {
        for (let j = 0; j < badWordsArray.length; j++) {
            if (splittedText[i].includes(badWordsArray[j])) {
                splittedText[i] = splittedText[i].replace(badWordsArray[j], "****");
            }
        }
    }
    return splittedText.join(" ");
}

// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
function getdivideByThreeArray() {
    document.getElementById("showTask9").innerText = "Масив: " + divideByThree(getStringFromUser("task9"));
}

function divideByThree(text) {
    let splittedText = text.toLowerCase().split("");
    let newArray = [];
    let i = 0;
    while (i < splittedText.length) {
        newArray.push(splittedText.slice(i, i += 3).join(""));
    }
    console.log(newArray);
    return newArray;
}

// Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]
function getGenerateCombinationsArray() {
    document.getElementById("showTask10").innerText = "Масив: " + generateCombinations(getStringFromUser("task10"));
}

function generateCombinations(text) {
    let splittedText = text.split("");
    let length = splittedText.length;
    for (let i = 0; i < length; i++) {
        splittedText.push(splittedText.shift());
        console.log(splittedText);
        if (length > 2) {
            for (let j = 0; j < length - 1; j++) {
                let items = splittedText.splice(j, 1);
                splittedText.push(items.join());
                console.log(splittedText);
            }
        }
    }
}