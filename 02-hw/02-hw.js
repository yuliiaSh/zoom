calculateSumAndShowResult();

function calculateSumAndShowResult() {
    const firstInput = getInteger('Введіть перше число');
    const secondInput = getInteger('Введіть друге число');
    const firstNumber = Math.min(firstInput, secondInput);
    const secondNumber = Math.max(firstInput, secondInput);
    const isSkipOdd = confirm('Чи потрібно пропускати парні числа?');
    showResult(firstNumber, secondNumber, isSkipOdd);
}

function getInteger(msg) {
    while (true) {
        let input = prompt(msg);
        if (input.length <= 0 || isNaN(input) || input == null) {
            alert("Введіть ціле число");
        } else {
            return parseInt(input);
        }
    }
}

function sumNumbers(number1, number2, skipOdd) {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        if (skipOdd && i% 2 === 0) {
            continue;
        }
        sum = sum + i;
    }
    return sum;
}

function showResult(firstNumber, secondNumber, isSkipOdd) {
    document.writeln(`
    Перше число: ${firstNumber};<br>
    Друге число: ${secondNumber};<br>
    Сума чисел: ${sumNumbers(firstNumber, secondNumber, isSkipOdd)};<br>
    `);
}