/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.


*/

let driversArr = [];

const auto = {
    manufacturer: "Volvo",
    model: "S60",
    releaseYear: 2015,
    avgSpeed: 150,
    fuelTank: 50,
    avgFuelConsumption: 7,
    drivers: [driversArr],
    addDriver() {
        driversArr.push(createDriver());
        this[drivers] = driversArr
    },
    showInfo() {
        let result = '<ul class="carResult">';
        for (key in this) {
            if (typeof this[key] != 'function') {
                if (this[key].length == 1) {
                    this[key] = 0
                }
                result += `<li>${key}: ${this[key]}</li>`
                console.log(this[key])
            }
        }
        result += '</ul>';
        document.querySelector('.carInfo').innerHTML = result
    }
}

//creates driver
function createDriver(name, license) {
    name = prompt("Write driver's name");
    license = prompt("Write driver's license");
    return {
        driverName: name,
        license: license
    }
}








/*
Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

*/

let time = {}

function setUserTime() {
    let h = document.getElementById("userHours").valueAsNumber;
    let m = document.getElementById("userMinutes").valueAsNumber;
    let s = document.getElementById("userSec").valueAsNumber;
    if (isInvalid(h, m, s)) {
        document.getElementById("timeResult").innerHTML = `<span style="color: red">INVALID TIME</span>`
        document.querySelectorAll('.btn-calc').forEach((button) => button.setAttribute('disabled', ''));
        return
    }
    time = {
        hours: h,
        minutes: m,
        seconds: s
    }
    console.log(document.querySelectorAll('button[disabled]'))
    document.querySelectorAll('button[disabled]').forEach((button) => button.removeAttribute('disabled'));
    buildMarkup()
}

function buildMarkup() {
    let result = ''
    for (key in time) {
        result += `${time[key]}:`
    }
    document.getElementById("timeResult").innerHTML = result.slice(0, -1);
}

function isInvalid(h, m, s) {
    return h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59 || !Number.isInteger(h) || !Number.isInteger(m) || !Number.isInteger(s);
}

function calcHours() {
    let deltaH = Number(prompt('How many hours do you want to add?'));
    
    if (!Number.isInteger(deltaH) || deltaH < 0) {
        document.getElementById("timeResult").innerHTML = `<span style="color: red">INVALID TIME</span>`
        return
    }
    
    time.hours += deltaH;
    if (time.hours > 23) {
        time.hours = time.hours % 24
    }
    buildMarkup()
}

function calcMinutes() {
    let deltaM = Number(prompt('How many minutes do you want to add?'));
    
    if (!Number.isInteger(deltaM) || deltaM < 0) {
        document.getElementById("timeResult").innerHTML = `<span style="color: red">INVALID TIME</span>`
        return
    }
    
    time.minutes += deltaM;
    if (time.minutes > 59) { 
        time.hours = Math.trunc((time.hours + (time.minutes / 60))) % 24
        time.minutes = time.minutes % 60
    }
    
    buildMarkup()
}


function calcSeconds() {
    let deltaS = Number(prompt('How many seconds do you want to add?'));
    
    if (!Number.isInteger(deltaS) || deltaS < 0) {
        document.getElementById("timeResult").innerHTML = `<span style="color: red">INVALID TIME</span>`
        return
    }
    
    time.seconds += deltaS;
    if (time.seconds > 59) { 
        time.minutes = Math.trunc((time.minutes + (time.seconds / 60))) % 60
        time.seconds = time.seconds % 60

    if (time.minutes > 59) { 
        time.hours = Math.trunc((time.hours + (time.minutes / 60))) % 24
        time.minutes = time.minutes % 60
        }
    }
    
    buildMarkup()
}




/*
Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу.
(Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді) */

