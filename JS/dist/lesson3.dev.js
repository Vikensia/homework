"use strict";

function byId(id) {
  return document.getElementById(id);
} //task1
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.


function caclAge() {
  var userAge = byId('userAge').valueAsNumber;

  if (isNaN(userAge) || userAge < 0 || userAge > 120) {
    byId('ageResult').innerHTML = "<span style=\"color: red\">Invalid number</span>";
  } else if (userAge >= 0 && userAge <= 11) {
    byId('ageResult').innerHTML = "<span style=\"color: blue\">child</span>";
  } else if (userAge > 11 && userAge <= 17) {
    byId('ageResult').innerHTML = "<span style=\"color: blue\">teenager</span>";
  } else if (userAge > 17 && userAge < 60) {
    byId('ageResult').innerHTML = "<span style=\"color: blue\">adult</span>";
  } else if (userAge >= 60) {
    byId('ageResult').innerHTML = "<span style=\"color: blue\">elder</span>";
  }
} //task2
//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


function showSymbol() {
  var userNumber = byId('userNumber').valueAsNumber;

  switch (userNumber) {
    case 0:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">)</span>";
      break;

    case 1:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">!</span>";
      break;

    case 2:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">@</span>";
      break;

    case 3:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">#</span>";
      break;

    case 4:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">$</span>";
      break;

    case 5:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">%</span>";
      break;

    case 6:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">^</span>";
      break;

    case 7:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">7</span>";
      break;

    case 8:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">*</span>";
      break;

    case 9:
      byId('userSymbol').innerHTML = "<span style=\"color: blue\">(</span>";
      break;

    default:
      byId('userSymbol').innerHTML = "<span style=\"color: red\">Invalid number</span>";
  }
} //task3
//Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function sumRange() {
  var rangeStart = byId('rangeStart').valueAsNumber;
  var rangeEnd = byId('rangeEnd').valueAsNumber;
  var rangeSum = 0;

  if (rangeStart % 1 || rangeEnd % 1 || isNaN(rangeStart) || isNaN(rangeEnd)) {
    byId('rangeSum').innerHTML = "<span style=\"color: red\">Only integer</span>";
  } else {
    if (rangeEnd > rangeStart) {
      for (i = rangeStart; i <= rangeEnd; i++) {
        rangeSum = rangeSum + i;
      }
    } else if (rangeEnd < rangeStart) {
      for (i = rangeEnd; i <= rangeStart; i++) {
        rangeSum = rangeSum + i;
      }
    } else {
      rangeSum = rangeStart;
    }

    byId('rangeSum').innerHTML = "<span style=\"color: blue\">".concat(rangeSum, "</span>");
  }
} //task4
//Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function caclNumbers() {
  var number1 = Math.abs(byId('number1').valueAsNumber);
  var number2 = Math.abs(byId('number2').valueAsNumber);
  var maxDivisor;

  if (isNaN(number1) || isNaN(number2)) {
    byId('maxDivisor').innerHTML = "<span style=\"color: red\">Only integer</span>";
  } else {
    var min = Math.min(number1, number2);
    debugger;

    for (i = min; i >= 1; i--) {
      if (number1 % i === 0 && number2 % i === 0) {
        maxDivisor = i;
        break;
      }
    }

    byId('maxDivisor').innerHTML = "<span style=\"color: blue\">".concat(maxDivisor, "</span>");
  }
} //task5
//Запитай у користувача число і виведи всі дільники цього числа.


function calcNumber2() {
  var number = Math.abs(byId('userNumber2').valueAsNumber);
  var divisors = '';

  if (isNaN(number)) {
    byId('divisors').innerHTML = "<span style=\"color: red\">Only integer</span>";
  } else {
    for (i = -number; i <= number; i++) {
      if (number % i === 0) {
        divisors = divisors + i + ", ";
      }
    }

    byId('divisors').innerHTML = "<span style=\"color: blue\">".concat(divisors, "</span>");
  }
} //task6
//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function isPalindrom() {
  var number = byId('userPalindrom').valueAsNumber;

  if (isNaN(number) || number < 10000 || number > 99999) {
    byId('palindromResult').innerHTML = "<span style=\"color: red\">Invalid number</span>";
  } else {
    //  debugger
    var palFifth = number % 10;
    var palFirst = Math.floor(number / 10000);
    var palFourth = (number - palFifth) / 10 % 10;
    var palSecond = Math.floor(number / 1000) - palFirst * 10;

    if (palFifth === palFirst && palFourth === palSecond) {
      byId('palindromResult').innerHTML = "<span style=\"color: blue\">It is palindrom</span>";
    } else {
      byId('palindromResult').innerHTML = "<span style=\"color: red\">Not a palindrom</span>";
    }
  }
} //task7

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/


function calcDiscount() {
  var shoppingSum = byId('shoppingSum').valueAsNumber;
  var sumToPay;
  var DISCOUNT_LOW = 3;
  var DISCOUNT_MEDIUM = 5;
  var DISCOUNT_HIGH = 7;

  if (isNaN(shoppingSum) || shoppingSum < 0) {
    byId('userToPay').innerHTML = "<span style=\"color: red\">Invalid sum</span>";
  } else {
    if (shoppingSum >= 200 && shoppingSum < 300) {
      sumToPay = shoppingSum * (100 - DISCOUNT_LOW) / 100;
    } else if (shoppingSum >= 300 && shoppingSum < 500) {
      sumToPay = shoppingSum * (100 - DISCOUNT_MEDIUM) / 100;
    } else if (shoppingSum >= 500) {
      sumToPay = shoppingSum * (100 - DISCOUNT_HIGH) / 100;
    } else {
      sumToPay = shoppingSum;
    }

    sumToPay = sumToPay.toFixed(2);
    byId('userToPay').innerHTML = "<span style=\"color: blue\">".concat(sumToPay, "</span>");
  }
} //task8
//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


function calcStats() {
  var positiveNumbers = 0,
      negativeNumbers = 0,
      zeroNumbers = 0,
      oddNumbers = 0,
      evenNumbers = 0;
  var userNumber;
  var userNumbersAll = '';
  var i = 0;

  while (i < 10) {
    userNumber = prompt('Enter your number');
    userNumber = Number(userNumber);

    if (isNaN(userNumber)) {
      byId('userStats').innerHTML = "<span style=\"color: red\">You entered invalid number</span>";
      break;
    } else {
      i++;
      userNumbersAll = userNumbersAll + ' ' + userNumber;

      if (userNumber > 0) {
        positiveNumbers++;
      } else if (userNumber < 0) {
        negativeNumbers++;
      } else {
        zeroNumbers++;
      }

      if (userNumber % 2 === 0) {
        evenNumbers++;
      } else {
        oddNumbers++;
      }
    }
  }

  if (i === 10) {
    byId('userStats').innerHTML = "<span style=\"color: blue\">Your numbers: ".concat(userNumbersAll, ". You entered ").concat(positiveNumbers, " positive numbers, ").concat(negativeNumbers, " negative numbers, ").concat(zeroNumbers, " zeros, ").concat(oddNumbers, " odd numbers, ").concat(evenNumbers, " even numbers</span>");
  }
} //task9
//Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


function nameDays() {
  var weekDay = 'Понеділок';
  var result;
  var i = 1;

  do {
    switch (i) {
      case 1:
        weekDay = 'Понеділок';
        break;

      case 2:
        weekDay = 'Вівторок';
        break;

      case 3:
        weekDay = 'Середа';
        break;

      case 4:
        weekDay = 'Четвер';
        break;

      case 5:
        weekDay = "П'ятниця";
        break;

      case 6:
        weekDay = 'Субота';
        break;

      case 7:
        weekDay = 'Неділя';
        i = 0;
        break;
    }

    result = window.confirm("\u0414\u0435\u043D\u044C \u0442\u0438\u0436\u043D\u044F ".concat(weekDay, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"));
    i++;
  } while (result);
} //task10
//Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


function guessNumber() {
  var userNumber = 100;
  var userMax = 100;
  var userMin = 0;
  var delta = 50;
  var result;
  userNumber = userNumber / 2;

  function answerMore() {
    result = window.confirm("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u0456\u043B\u044C\u0448\u0435 ".concat(userNumber, "?"));

    if (result) {
      delta = Math.ceil(delta / 2);
      userNumber += delta;
      return userNumber;
    } else {
      result = window.confirm("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043C\u0435\u043D\u0448\u0435 ".concat(userNumber, "?"));

      if (result) {
        delta = Math.floor(delta / 2);
        userNumber -= delta;

        if (userNumber <= 3) {
          userNumber -= 1;
        }

        return userNumber;
      }
    }

    return userNumber;
  }

  do {
    answerMore(userNumber);
  } while (result && userNumber < 100 && userNumber > 0);

  if (userNumber > 99) {
    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userMax));
    return userMax;
  }

  if (userNumber < 1) {
    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userMin));
    return userMin;
  }
} //task11
//Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


function calcTable() {
  var tableRow = '';
  var tableCol = '';
  var tableCell = '';

  for (var _i = 1; _i < 12; _i++) {
    //       debugger
    tableCol += '<tr>';
    tableCol += tableCell;
    tableCol += '</tr>';
    tableCell = '';

    for (var j = 2; j < 10; j++) {
      tableCell += '<td style="border: 1px solid black; padding: 5px;">';
      tableCell = tableCell + j + '*' + _i + '=' + _i * j;
      tableCell += '</td>'; //    tableRow += tableCell
    }
  }

  byId('numTable').innerHTML = "".concat(tableCol);
} //task12
//Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


function nextDay() {
  var userDate = byId('userDate').valueAsNumber;
  var userMonth = byId('userMonth').valueAsNumber;
  var userYear = byId('userYear').valueAsNumber;
  var maxDays = 0,
      newDate = 0,
      newMonth = 0;

  switch (userMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      maxDays = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      maxDays = 30;
      break;

    case 2:
      maxDays = 28;
      break;
  }

  if (userYear % 4 === 0 && (userYear % 100 !== 0 || userYear % 400 === 0)) {
    switch (userMonth) {
      case 2:
        maxDays = 29;
        break;
    }
  }

  function nextDay() {
    if (userDate == maxDays) {
      newDate = 1;
    } else {
      newDate = userDate + 1;
    }

    return newDate;
  }

  function nextMonth() {
    if (userDate == maxDays) {
      if (userMonth < 12) {
        newMonth = userMonth + 1;
      } else {
        newMonth = 1;
        userYear += 1;
      }
    } else {
      newMonth = userMonth;
    }

    return newMonth;
  }

  if (isNaN(userDate) || isNaN(userMonth) || isNaN(userYear) || userDate <= 0 || userMonth <= 0) {
    byId('dayResult').innerHTML = "<span style=\"color: red\">INVALID DATA</span>";
  } else {
    nextDay();
    nextMonth();
    byId('dayResult').innerHTML = "<span style=\"color: blue\">DATE: ".concat(newDate, ", MONTH: ").concat(newMonth, ", YEAR: ").concat(userYear, "</span>");
  }
}