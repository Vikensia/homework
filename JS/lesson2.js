function byId(id) {
    return document.getElementById(id)
}

//task1
function startRound() {
    let task1 = 0.1 + 0.2;
    task1 = task1 * 100;
    task1 = Math.round(task1);
    task1 = task1 / 100;
    byId('task1').innerHTML = `<span style="color: blue">${task1}</span>`
}

//task 2
function startSum() {
    let x = "1";
    let y = 2;
    x = Number(x);
    let z = x + y;
    byId('z').innerHTML = `<span style="color: blue">${z}</span>`
}

//task3
function caclFiles() {
    const FILE_SIZE = 820;
    let userStorageGb = byId('userStorageGb').valueAsNumber;
    if (isNaN(userStorageGb) || userStorageGb < 0) {
        byId('filesNumber').innerHTML = `<span style="color: red">Invalid number</span>`;
    } else {
        let userStorageMb = userStorageGb * 1024;
        let filesNumber = userStorageMb / FILE_SIZE;
        filesNumber = Math.floor(filesNumber);
        byId('filesNumber').innerHTML = `<span style="color: blue">${filesNumber}</span>`
    }
}

//task4
function caclChocolates() {
    let userMoney = byId('userMoney').valueAsNumber;
    let chocolatePrice = byId('chocolatePrice').valueAsNumber;
    if (isNaN(userMoney) || isNaN(chocolatePrice) || userMoney < 0 || chocolatePrice < 0) {
        byId('chocolatesNumber').innerHTML = `<span style="color: red">Invalid number</span>`
        byId('moneyLeft').innerHTML = `<span></span>`
    } else if (chocolatePrice === 0) {
        byId('chocolatesNumber').innerHTML = `<span style="color: blue">Free chocolates for everyone!</span>`;
        byId('moneyLeft').innerHTML = `<span style="color: blue">${userMoney} money left.</span>`
    } else {
        let chocolatesNumber = Math.floor(userMoney / chocolatePrice);
        let moneyLeft = userMoney - chocolatesNumber * chocolatePrice;
        moneyLeft = Math.round(moneyLeft * 100) / 100;
        byId('chocolatesNumber').innerHTML = `<span style="color: blue">You can buy ${chocolatesNumber} chocolates.</span>`
        byId('moneyLeft').innerHTML = `<span style="color: blue">${moneyLeft} money left.</span>`
    }
}

//task5
function startReverse() {
    let userNumber = byId('userNumber').valueAsNumber;
    if (isNaN(userNumber) || userNumber < 100 || userNumber > 999) {
        byId('userNumberReversed').innerHTML = `<span style="color: red">Invalid number</span>`;
    } else {
        let lastNumber = String(userNumber % 10);
        let secondNumber = String((userNumber % 100 - lastNumber) / 10);
        let firstNumber = String(Math.floor(userNumber / 100));
        let userNumberReversed = lastNumber + secondNumber + firstNumber;
        byId('userNumberReversed').innerHTML = `<span style="color: blue">${userNumberReversed}</span>`
    }
}

//task6
function calcProfit() {
    const PROFIT_PERCENT_YEAR = 5;
    let userDeposit = byId('userDeposit').valueAsNumber;
    if (isNaN(userDeposit) || userDeposit < 0) {
        byId('userProfit').innerHTML = `<span style="color: red">Invalid number</span>`;
    } else {
        let userProfit = userDeposit * PROFIT_PERCENT_YEAR / 100 / 12 * 2;
        userProfit = Math.round(userProfit * 100) / 100;
        byId('userProfit').innerHTML = `<span style="color: blue">${userProfit}</span>`
    }
}