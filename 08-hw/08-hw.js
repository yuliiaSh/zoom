// У стдентів повинні бути наступні властивості: university, course, fullName,
// вони передаються при створенні студента(в конструктор).
class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.dismiss = true;
    }

    // Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        console.log(
            `Студент ${this.course} -го курсу ${this.university}, ${this.fullName}`
        );
    }

    // Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get getStudentMarks() {
        if (this.dismiss) {
            return this.marks;
        } else {
            return null;
        }
    }

    // Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set setStudentMarks(mark) {
        if (this.dismiss = true) {
            return this.marks.push(mark);
        } else {
            return this.marks;
        }
    }

    // Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    getAverageMark() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum = sum + this.marks[i];
        }
        return sum / this.marks.length;
    }

    // Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    dismissStudent() {
        return (this.dismiss = false);
    }

    // Створіть метод this.recover, який дозволить поновити студента
    recover() {
        return (this.dismiss = true);
    }

}

const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");

student.getInfo();
student.setStudentMarks = 5;
student.setStudentMarks = 4;
student.setStudentMarks = 5;
student.setStudentMarks = 4;
console.log("Marks: " + student.getStudentMarks);
console.log("Average mark: " + student.getAverageMark());
student.dismissStudent();
console.log("Marks after dismiss: " + student.getStudentMarks);
student.recover();
console.log("Marks after recover: " + student.getStudentMarks);
student.setStudentMarks = 3;
console.log("Marks: " + student.getStudentMarks);
console.log("Average mark: " + student.getAverageMark());