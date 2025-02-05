/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.*/

const auto = {
    manufacturer: "Volvo",
    model: "S60",
    releaseYear: 2015,
    avgSpeed: 90,
    fuelTank: 50,
    avgFuelConsumption: 7,
    drivers: [],

    addDriver() {
        this.drivers.push(createDriver());
        this.showInfo()
        document.querySelector('.btn-check-driver').removeAttribute('disabled')
    },

    showInfo() {
        let result = '<ul class="carResult">';
        for (key in this) {
            if (typeof this[key] != 'function' && typeof this[key] != 'object') {
                result += `<li>${key}: ${this[key]}</li>`
                console.log(this[key])
            }
            if (typeof this[key] == 'object' && this[key].length > 0) {
                result += `<li>${key}: ${this[key].length}</li>`
                this[key].forEach(driver => {
                    result += `<li>${driver.driverName}, license ${driver.license}</li>`
                })
            }
        }
        result += '</ul>';
        document.querySelector('.carInfo').innerHTML = result
    },

    checkDriver() {
        let counter = 0;
        if (confirm('Search by name?')) {
            const userDriver = prompt("Write driver's name");
            this.drivers.forEach(driver => {
                if (driver.driverName == userDriver) {
                    counter++;
                }
            })
            if (counter > 0) {
                alert("This driver's name is in list!")
            } else {
                alert("There are no drivers with such name in list!")
            }
        } else {
            const userLicense = prompt("Write driver's license");
            this.drivers.forEach(driver => {
                if (driver.license == userLicense) {
                    counter++;
                }
            })
            if (counter > 0) {
                alert("This driver's license is in list!")
            } else {
                alert("There are no drivers with such license in list!")
            }
        }
    },

    calcTime() {
        const userDistance = Number(prompt('What distance do you want to calc? E.g. 100'))
        let timeNeeded = Number((userDistance / this.avgSpeed).toFixed(2));
        timeNeeded += Math.trunc(timeNeeded / 4);
        let fuelNeeded = (userDistance / this.avgFuelConsumption).toFixed(2);
        alert(`For ${userDistance} km you need ${fuelNeeded} litres of fuel and ${timeNeeded} hours`)
    }
}

function createDriver(name, license) {
    name = prompt("Write driver's name");
    license = prompt("Write driver's license");
    console.log(name + license)
    return {
        driverName: name,
        license: license
    }
}

/*Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
Для виведення часу на екран.
Зміни часу на передану кількість секунд.
Зміни часу на передану кількість хвилин.
Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/

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
    document.querySelectorAll('.btn-calc[disabled]').forEach((button) => button.removeAttribute('disabled'));
    buildMarkup()
}

function buildMarkup() {
    let result = ''
    let timeStr = ''
    for (key in time) {
        timeStr = String(time[key]).padStart(2, "0");
        result += `${timeStr}:`
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

/*Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
Складання 2-х об'єктів-дробів.
Віднімання 2-х об'єктів-дробів.
Множення 2-х об'єктів-дробів.
Ділення 2-х об'єктів-дробів.
Скорочення об'єкта-дробу.
(Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді) */

let fr1, fr2;

function setFraction(id) {
    let f = document.getElementById(`${id}`).value;
    f = f.split("/")
    return {
        numerator: f[0],
        denominator: f[1]
    }
}

const fractionMethods = {
    resultNum: '',
    resultDenom: '',
    commonDenom: '',
    resultInt: '',

    askFractions() {
        fr1 = setFraction("userFraction1");
        fr2 = setFraction("userFraction2");
        document.querySelector('.btn-reduction').removeAttribute('disabled');
        this.clearResult()
        return { fr1, fr2 }
    },

    showResult() {
        if (this.resultNum === 0) {
            document.querySelector('.btn-reduction').setAttribute('disabled', '');
            return document.getElementById("mathResult").innerHTML = 0
        } else if (this.resultDenom == 0 || this.resultNum == 0) {
            document.querySelector('.btn-reduction').setAttribute('disabled', '');
            return document.getElementById("mathResult").innerHTML = "DON'T USE ZERO"
        } else {
            return document.getElementById("mathResult").innerHTML = this.resultInt + this.resultNum + '/' + this.resultDenom;
        }

    },

    commonDenominator(fr1, fr2) {
        this.commonDenom = fr1.denominator * fr2.denominator;
        this.resultDenom = this.commonDenom
    },

    add() {
        const fr = this.askFractions();
        this.commonDenominator(fr1, fr2);
        this.resultNum = fr1.denominator * fr2.numerator + fr2.denominator * fr1.numerator;
        this.showResult();
    },
    subtr() {
        const fr = this.askFractions();
        this.commonDenominator(fr1, fr2);
        this.resultNum = fr2.denominator * fr1.numerator - fr1.denominator * fr2.numerator;
        this.showResult();
    },
    multi() {
        const fr = this.askFractions();
        this.resultNum = fr1.numerator * fr2.numerator;
        this.resultDenom = fr1.denominator * fr2.denominator;
        this.showResult();
    },
    div() {
        const fr = this.askFractions();
        this.resultNum = fr1.numerator * fr2.denominator;
        this.resultDenom = fr1.denominator * fr2.numerator;
        this.showResult();
    },
    red() {
        if (this.resultNum >= this.resultDenom) {
            this.resultInt = Math.trunc(this.resultNum / this.resultDenom) + ' '
            if (this.resultNum % this.resultDenom == 0) {
                return document.getElementById("mathResult").innerHTML = this.resultInt
            }
            this.resultNum %= this.resultDenom;
        }

        for (let i = Math.abs(this.resultNum); i > 0; i--) {
            if (this.resultNum % i == 0 && this.resultDenom % i == 0) {
                this.resultNum /= i;
                this.resultDenom /= i;
            }
        }
        this.showResult();
    },

    clearResult() {
        this.resultNum, this.resultDenom, this.commonDenom, this.resultInt = ''
    }

}