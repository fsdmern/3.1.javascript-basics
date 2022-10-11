//2. Browser Console
document.write('<h3>2. console.log()</h3>');
console.log('I am Java Script and Writing to the Browser Console');

//3. JS - Alerts
document.write('<h3>3. Java Script Alerts</h3>');
//Uncomment while testing
// alert('Welcome to Java Script');
// alert(1 + 2 + 3);
// let age = prompt('How old are you ?', 999);
// alert(`You are ${age} years old!!!`);

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
// Primitive: string, number, bigint, boolean, symbol, null, undefined
// Non Primitive: Object: {} -- It can hold multiple properties of an object
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

//7a.Know the Data Type of any value
document.write('<h3>7a. Know data type of any value</h3>');
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

//7b. Type Conversions
document.write('<h3>7b. Type Conversions</h3>');
//Boolean conversion
let xvalue = true;
let yvalue = String(xvalue);
// alert(typeof yvalue)
// alert(Boolean(0)); --False
// alert(Boolean(1)); -- True
// alert(Boolean('Hi')); -- True
//alert(Boolean('')); -- False

//Numerical Conversion
let string = '      67890     ';
let string_to_num = Number(string);
// alert(typeof string_to_num);

document.write(
  "Convert string to number: '      67890     ': " + string_to_num + '<br/>'
);

//String Conversion
let number = 12345;
let num_to_string = String(number);
// alert(typeof num_to_string);

//7c. Comparisons
document.write('<h3>7c. Comparisons</h3>');
// = (assignment),
//== (Equality ignoring the data type),
//=== (Equality considers the data type during comparison)
// alert("123" == 123)
// alert('123' === 123);
let comp_result = 34 != 24;
// alert(comp_result);

//8. Conditionals
document.write('<h3>8. Conditionals</h3>');
// let indpendence_day = prompt("What is the year of India's Independence");
// if (indpendence_day == 1947) {
//   alert('You are right!');
// } else {
//   alert('Sorry. You are not right!');
// }

// if (1) {
//   alert('False');
// } else {
//   alert('True');
// }

//terinary operator
// let result = 69 > 48 ? 'Yes. 69 greater than 48' : 'No. 69 is not greater than 48';
// alert(result);

//Chaining of terinary operator
// let age = prompt('age ?', 99);
// let message =
//   age < 3
//     ? 'You are a baby!'
//     : (age > 3) & (age < 18)
//     ? 'You are a child!'
//     : 'You are an Adult!';
// alert(message);

//9. Logical Operators
document.write('<h3>9. Logical Operators</h3>');
// || pipe for OR condition
// && is for AND condition
// ! NOT operator
// alert(true || true);
// alert(true || false);
// alert(false || true);
// alert(false || false);
let voterid = true;
let age = 25;
let eligible = voterid && age >= 18;
// alert(eligible);

// ! NOT
alert(!false);
