const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs() {
    let boys = [];
    let girls = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].slice(-1) === 'а') {
            girls.push(students[i]);
        } else {
            boys.push(students[i]);
        }
    }
    let pairsArray = [];
    for (let i = 0; i < boys.length; i++) {
        pairsArray.push([boys[i], girls[i]]);
    }
    return pairsArray;
}

function getJoinedPairs() {
    const pairs = getPairs();
    let joinedPairArray = [];
    for (let i = 0; i < pairs.length; i++) {
        joinedPairArray.push([pairs[i][0] + " і " + pairs[i][1], pairs[i]]);
    }
    return joinedPairArray;
}

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function getStudentsAndThemes() {
    const joinedPairs = getJoinedPairs();
    let studentsAndThemesArray = [];
    for (let i = 0; i < joinedPairs.length; i++) {
        studentsAndThemesArray.push([joinedPairs[i][0], themes[i]]);
    }
    return studentsAndThemesArray;
}

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function getMarks() {
    let marksArray = [];
    for (let i = 0; i < students.length; i++) {
        marksArray.push([students[i], marks[i]]);
    }
    return marksArray;
}

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою,
// але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
function getMarksForPair() {
    for (let i = 0; i < 3; i++) {
      return getStudentsAndThemes().map((group) => [...group, marks[i]]);
    }
}

console.log(getPairs());
console.log(getStudentsAndThemes());
console.log(getMarks());
console.log(getMarksForPair());