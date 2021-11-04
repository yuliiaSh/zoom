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

// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit() {
    const numToSeparate = getIntegerFromUser("task1");
    const arrayOfDigits = Array.from(String(numToSeparate), Number);
    const max = Math.max.apply(null, arrayOfDigits);
    document.getElementById("showTask1").innerText = "Максимальне число: " + max;
}

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function getPowNumber() {
    const digit = getIntegerFromUser("task2_number");
    let pow = getIntegerFromUser("task2_pow");
    let result = digit;
    let s = pow.toString();
    if (s.includes("-")) {
        pow = parseInt(s.replace("-", ""));

    }
    for (let i = 0; i < pow - 1; i++) {
        result = result * digit;
    }
    document.getElementById("showTask2").innerText = "Cтупінь числа: " + result;
}

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function formatName() {
    const name = getStringFromUser("task3").toLowerCase();
    const formatedName = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("showTask3").innerText = "Отформатоване ім'я: "
        + formatedName;
}

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function getSum() {
    const tax = 19.5;
    const sum = getIntegerFromUser("task4");
    const salary = sum - ((sum * tax) / 100);
    document.getElementById("showTask4").innerText = "Сума, що залишається після оплати податку: " + salary;
}

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
function getRandomDigitInARange() {
    const first = getIntegerFromUser("task5_firstInput");
    const second = getIntegerFromUser("task5_secondInput");
    const min = Math.min(first, second);
    const max = Math.max(first, second);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("showTask5").innerText = "Випадкове ціле число в діапазоні: " + randomNumber;
}

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
function countLetterOccurence() {
    const str = getStringFromUser("task6_word");
    const find = getStringFromUser("task6_letter");
    let numberOfTimes = (str.split(find)).length - 1;
    document.getElementById("showTask6").innerText = "Скільки разів буква повторюється в слові: " + numberOfTimes;
}

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
function convertCurrency() {
    const rate = 27.5;
    const value = getStringFromUser("task7").toLowerCase();
    document.getElementById("showTask7_rate").innerText = "Курс: " + rate;
    if (value.includes("$")) {
        document.getElementById("showTask7").innerText = "Результат: " + parseInt(value.replace("$", "")) * rate + " uah";
    } else if (value.includes("uah")) {
        document.getElementById("showTask7").innerText = "Результат: " + parseInt(value.replace("uah", "")) / rate + " $";
    } else {
        document.getElementById("showTask7").innerText = "Введіть $ або UAH";
    }
}

//  Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
//  Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
function getRandomPassword() {
    const maxLength = 8;
    let password = "";
    let length = getIntegerFromUser("task8");
    if (length > 8) {
        for (let i = 0; i < maxLength; i++) {
            let number = Math.floor(Math.random() * 10);
            password = password.concat(number);
        }
    } else {
        for (let i = 0; i < length; i++) {
            let number = Math.floor(Math.random() * 10);
            password = password.concat(number);
        }
    }
    document.getElementById("showTask8").innerText = "Рандомний пароль: " + password;
}

// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters() {
    const word = getStringFromUser("task9_word").toLowerCase();
    const letterToDelete = getStringFromUser("task9_letter").toLowerCase();
    let strings = word.split(letterToDelete);
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].replace(letterToDelete, '');
    }
    let stringWithoutDeletedLetters = strings.join("");
    document.getElementById("showTask9").innerText = "Нове слово: " + stringWithoutDeletedLetters;
}

// Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
function isPalindrome() {
    let word = getStringFromUser("task10_word");
    word = word.toLowerCase().replaceAll(" ", "");
    let isWordPolindrome = word == word.split("").reverse().join("");
    document.getElementById("showTask10").innerText = "Чи є слово паліндромом: " + isWordPolindrome;

}

// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"
function deleteLettersFromString() {
    let sentense = getStringFromUser("task11_word").toLowerCase();
    let charArray = sentense.split("");
    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++)
            if (charArray[i] == charArray[j]) {
                sentense = sentense.replaceAll(charArray[i], "");
            }
    }
    document.getElementById("showTask11").innerText = "Нове речення: " + sentense;
}