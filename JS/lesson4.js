// Напиши всі можливі варіанти створення функцій.
function varFirst() {}
const varSecond = function () {}
const varThird = () => res;

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function askArgument() {
    let argList = '';
    do {
        let arg = prompt('Введіть аргумент. Якщо бажаєте припинити введення - натисніть "Відміна"');
        if (arg!=null) {
        argList = arg + "," + argList;
        } else {
            break;
        }
    } while (prompt);
    console.log(argList);
}

function calcArguments() {
    askArgument();
    let argListArr = argList.split(",");
    argListArr = argListArr.length - 1;
    console.log(argListArr);
    document.getElementById('argumentsQty').innerHTML = `<span style="color: blue">${argListArr}</span>`;
    argList = '';
}

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function byId(id) {
    return document.getElementById(id)
}

let compareRes = (num1, num2) => {
    return (num1 < num2) ? -1 : 
            (num1 > num2) ? 1 : 0
}

function compareResultHTML() {
    let num1 = byId('userNumber1').valueAsNumber;
    let num2 = byId('userNumber2').valueAsNumber;
    let result = compareRes(num1, num2);
    byId('compareResult').innerHTML = `<span style="color: blue">${result}</span>`;
}

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function calcFactorial() {
    let num = byId('userFactorial').valueAsNumber;

    if (num < 0) {
        byId('factorialResult').innerHTML = `<span style="color: red">Invalid number</span>`;
        return
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    byId('factorialResult').innerHTML = `<span style="color: blue">${factorial}</span>`;
}

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function mixNumbers() { 
    let num1 = byId('userFirst').valueAsNumber;
    let num2 = byId('userSecond').valueAsNumber;
    let num3 = byId('userThird').valueAsNumber;

    if (num1 < 0 || num2 < 0 || num3 < 0) {
        byId('mixNumbers').innerHTML = `<span style="color: red">Invalid number</span>`;
        return
    }

    let result = String(num1) + String(num2) + String(num3);
    byId('mixNumbers').innerHTML = `<span style="color: blue">${result}</span>`;
}

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let calcArea = (side1, side2) => {
    side1 = isNaN(side1) ? side2 : side1;
    side2 = isNaN(side2) ? side1 : side2;
    return side1 * side2
}

function calcSides() {
    debugger
    let side1 = byId('side1').valueAsNumber;
    let side2 = byId('side2').valueAsNumber;

    if (side1 < 0 || side2 < 0) {
        byId('area').innerHTML = `<span style="color: red">Invalid number</span>`;
        return
    }
    let area = calcArea(side1, side2)
    byId('area').innerHTML = `<span style="color: blue">${area}</span>`;
}

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function isPerfect(number) {
    let dividersSum = 0;

    for (i = 1; i < number; i++) {
        if (number % i === 0) {
        dividersSum += i;
        }
    }
    return number === dividersSum ? true : false
}

function checkPerfect() {
    let number = byId('userPerfect').valueAsNumber;

    if (isNaN(number) || number <= 0) {
        byId('perfectResult').innerHTML = `<span style="color: red">Invalid number</span>`
        return
    }

    isPerfect(number) ?
        byId('perfectResult').innerHTML = `<span style="color: blue">Number ${number} is perfect!</span>` :
        byId('perfectResult').innerHTML = `<span style="color: blue">Number ${number} isn't perfect!</span>`
}


/*
 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
 */

function calcPerfectNumbers() {
    let rangeMin = byId('userPerfectMin').valueAsNumber;
    let rangeMax = byId('userPerfectMax').valueAsNumber;
    let perfectNumbers = '';

    if (isNaN(rangeMin) || rangeMin <= 0 || isNaN(rangeMax) || rangeMax <= 0) {
        byId('perfectNumbers').innerHTML = `<span style="color: red">Invalid number</span>`
        return
    }

    for (i = rangeMin; i <= rangeMax; i++) {
        if (isPerfect(i)) {
            perfectNumbers += i + ', ';
        }
    }

    if (perfectNumbers) {
        perfectNumbers = perfectNumbers.slice(0, -2);
        byId('perfectNumbers').innerHTML = `<span style="color: blue">Perfect numbers in range: ${perfectNumbers}</span>`
    } else {
        byId('perfectNumbers').innerHTML = `<span style="color: blue">There are no perfect numbers in range!</span>`
    }
 }