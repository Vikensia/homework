"use strict";

function byId(id) {
  return document.getElementById(id);
} //task1


function startRound() {
  var task1 = 0.1 + 0.2;
  task1 = task1 * 100;
  task1 = Math.round(task1);
  task1 = task1 / 100;
  byId('task1').innerHTML = "<span style=\"color: blue\">".concat(task1, "</span>");
  return task1;
} //task 2


function startSum() {
  var x = "1";
  var y = 2;
  x = Number(x);
  var z = x + y;
  byId('z').innerHTML = "<span style=\"color: blue\">".concat(z, "</span>");
  return z;
} //task3


function caclFiles() {
  var FILE_SIZE = 820;
  var userStorageGb = byId('userStorageGb').valueAsNumber;

  if (isNaN(userStorageGb) || userStorageGb < 0) {
    byId('filesNumber').innerHTML = "<span style=\"color: red\">Invalid number</span>";
  } else {
    var userStorageMb = userStorageGb * 1024;
    var filesNumber = userStorageMb / FILE_SIZE;
    filesNumber = Math.floor(filesNumber);
    byId('filesNumber').innerHTML = "<span style=\"color: blue\">".concat(filesNumber, "</span>");
    return filesNumber;
  }
} //task4


function caclChocolates() {
  var userMoney = byId('userMoney').valueAsNumber;
  var chocolatePrice = byId('chocolatePrice').valueAsNumber;

  if (isNaN(userMoney) || isNaN(chocolatePrice) || userMoney < 0 || chocolatePrice < 0) {
    byId('chocolatesNumber').innerHTML = "<span style=\"color: red\">Invalid number</span>";
    byId('moneyLeft').innerHTML = "<span></span>";
    return;
  } else if (chocolatePrice === 0) {
    byId('chocolatesNumber').innerHTML = "<span style=\"color: blue\">Free chocolates for everyone!</span>";
    byId('moneyLeft').innerHTML = "<span style=\"color: blue\">".concat(userMoney, " money left.</span>");
  } else {
    var chocolatesNumber = Math.floor(userMoney / chocolatePrice);
    var moneyLeft = userMoney - chocolatesNumber * chocolatePrice;
    moneyLeft = Math.round(moneyLeft * 100) / 100;
    byId('chocolatesNumber').innerHTML = "<span style=\"color: blue\">You can buy ".concat(chocolatesNumber, " chocolates.</span>");
    byId('moneyLeft').innerHTML = "<span style=\"color: blue\">".concat(moneyLeft, " money left.</span>");
    return;
  }
} //task5


function startReverse() {
  var userNumber = byId('userNumber').valueAsNumber;

  if (isNaN(userNumber) || userNumber < 100 || userNumber > 999) {
    byId('userNumberReversed').innerHTML = "<span style=\"color: red\">Invalid number</span>";
  } else {
    var lastNumber = String(userNumber % 10);
    var secondNumber = String((userNumber % 100 - lastNumber) / 10);
    var firstNumber = String(Math.floor(userNumber / 100));
    var userNumberReversed = lastNumber + secondNumber + firstNumber;
    byId('userNumberReversed').innerHTML = "<span style=\"color: blue\">".concat(userNumberReversed, "</span>");
    return userNumberReversed;
  }
} //task6


function calcProfit() {
  var PROFIT_PERCENT_YEAR = 5;
  var userDeposit = byId('userDeposit').valueAsNumber;

  if (isNaN(userDeposit) || userDeposit < 0) {
    byId('userProfit').innerHTML = "<span style=\"color: red\">Invalid number</span>";
  } else {
    var userProfit = userDeposit * PROFIT_PERCENT_YEAR / 100 / 12 * 2;
    userProfit = Math.round(userProfit * 100) / 100;
    byId('userProfit').innerHTML = "<span style=\"color: blue\">".concat(userProfit, "</span>");
    return userProfit;
  }
}