"use strict";

var firstName;
var lastname;
var customerName;
var nickname;
/*let name
let imya-pol'zovateya
let !name
let nameofourpreciouscustomer*/
//let имя

firstName = prompt("Enter your name");
alert("Hello, ".concat(firstName, "!"));
var CURRENT_YEAR = 2024;
var userYearOfBirth;
var userAge;
userYearOfBirth = prompt("Enter your year of birth");
userAge = CURRENT_YEAR - userYearOfBirth;
alert("Your age is ".concat(userAge, "!"));
var squareLength;
var perim;
squareLength = prompt("Enter square length");
perim = 4 * squareLength;
alert("Perimeter is ".concat(perim, " sm"));
var circleRadius;
var circleArea;
circleRadius = prompt("Enter circle Radius");
circleArea = Math.PI * (circleRadius * circleRadius);
alert("Circle area is ".concat(circleArea, " sm2"));
var distance;
var travelTime;
distance = prompt("Enter distance");
travelTime = prompt("Enter time of travel");
var speed = distance / travelTime;
alert("Your speed is ".concat(speed, " km/h"));
var CONVERT_COURSE = 0.96;
var dollars = prompt("Enter dollars");
var euros = dollars * CONVERT_COURSE;
alert("You have ".concat(euros, " euros"));