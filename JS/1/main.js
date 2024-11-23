let firstName;
let lastname;
let customerName;
let nickname;

/*let name
let imya-pol'zovateya
let !name
let nameofourpreciouscustomer*/
//let имя


firstName = prompt("Enter your name");
alert(`Hello, ${firstName}!`);

const CURRENT_YEAR = 2024;
let userYearOfBirth;
let userAge;
userYearOfBirth = prompt("Enter your year of birth");
userAge = CURRENT_YEAR - userYearOfBirth;
alert(`Your age is ${userAge}!`);


let squareLength;
let perim;
squareLength = prompt("Enter square length");
perim = 4 * squareLength;
alert(`Perimeter is ${perim} sm`);


let circleRadius;
let circleArea;
circleRadius = prompt("Enter circle Radius");
circleArea = Math.PI * (circleRadius * circleRadius);
alert(`Circle area is ${circleArea} sm2`);


let distance;
let travelTime;
distance = prompt("Enter distance");
travelTime = prompt("Enter time of travel");
let speed = distance / travelTime;
alert(`Your speed is ${speed} km/h`);


const CONVERT_COURSE = 0.96;
let dollars = prompt("Enter dollars");
let euros = dollars * CONVERT_COURSE;
alert(`You have ${euros} euros`);
