//2. Browser Console
document.write('<h3>2. console.log()</h3>');
console.log('I am Java Script and Writing to the Browser Console');

//3. JS - Alerts
document.write('<h3>3. Java Script Alerts</h3>');
//Uncomment while testing
// alert('Welcome to Java Script');
// alert(1 + 2 + 3);
let age = prompt('How old are you ?', 999);
alert(`You are ${age} years old!!!`);

// let isFootBallPlayer = confirm('Are you a football player ?');
// alert(isFootBallPlayer);

//4. Java Script Variables (var, let, const)
document.write('<h3>4. Java Script Variables</h3>');
//var - can be re-assigned
document.write('<h3>4a. var - global scope</h3>');
//Global Scope
var num1 = 45;
var num2 = 36;
var sum = num1 + num2;
var subt = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
document.write('Sum of ' + num1 + ' and ' + num2 + ' is: ' + sum + '<br />');
document.write('Subt of ' + num1 + ' and ' + num2 + ' is: ' + subt + '<br />');

var name;
name = 'Mandeep';
document.write('My Name is: ' + name + '<br/>');
var name;
name = 'Ramu';
document.write('My Name is: ' + name);

//let - It can't be re-declared, but can be re-assigned
//Block Scope
document.write('<h3>4b. let - block scope</h3>');
document.write(
  "<h4>let - It can't be re-declared, but can be re-assigned</h4>"
);
let price = 55.5;
document.write('Price is: ' + price + '<br/>');
price = 60;
document.write('Price is: ' + price + '<br/>');

//const - cant be redeclared & cant be re-assigned
// Block Scope
document.write('<h3>4c. const - block scope</h3>');
const foot = 12;

//5. Assignment Operators
document.write('<h3>5. Assignment Operators</h3>');
// = (x=y), += (usage: x+=y => x=x+y), -+ (x-=y => x=x-y), *=, /=. %=, **=

let x = 20;
x -= 5;
document.write('Value of x now is: ' + x + '<br/>');

//6. Precedence
document.write('<h3>6. Precendce - Assignment Operators - BODMAS Rule</h3>');
document.write(
  '<h4>BODMAS - Bracket Open Division Multiplication Addition Subsctration</h4>'
);
//BODMAS - Bracket Open Division Multiplication Addition Subsctration
let y = 100 + 50 * 3;
document.write('Value of x now is: ' + y + '<br/>');

//7. Data Types
//Naming Convention: camelCase
document.write('<h3>7. Data Types</h3>');
let length = 25;
let firstname = 'Ramu';
let obj = {firstName: 'John', lastName: 'Doe'};
document.write(
  'Value of obj is: ' + obj.firstName + ' ' + obj.lastName + '<br/>'
);

let stringnum = 'Mandeep' + 1 + 2 + 3;
document.write('Value of stringnum now is: ' + stringnum + '<br/>');

//Know the Data Type of any value
document.write('Type of a variable value typeof(5): ' + typeof 5 + '<br/>');
document.write(
  'Type of a variable value typeof(15.4): ' + typeof 15.4 + '<br/>'
);
document.write(
  'Type of a variable value typeof("15.4"): ' + typeof '15.4' + '<br/>'
);

document.write(
  'Type of a variable value typeof(false): ' + typeof false + '<br/>'
);

document.write(
  'Type of a variable value typeof(null): ' + typeof null + '<br/>'
);

document.write(
  'Type of a variable value typeof(undefined): ' + typeof undefined + '<br/>'
);

document.write('Type of a variable value typeof([]): ' + typeof [] + '<br/>');
document.write('Type of a variable value typeof({}): ' + typeof {} + '<br/>');
document.write('Type of a variable value typeof(NaN): ' + typeof NaN + '<br/>');

document.write(
  'Type of a variable value typeof(alert): ' + typeof alert + '<br/>'
);

document.write(
  'Type of a variable value typeof(Math): ' + typeof Math + '<br/>'
);
