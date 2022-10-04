//Browser Console
console.log('I am Java Script and Writing to the Browser Console');

//JS - Alerts
// alert('Welcome to Java Script');
// alert(1 + 2 + 3);

//Java Script Variables (var, let, const)
//var - can be re-assigned
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

let price = 55.5;
document.write('Price is: ' + price + '<br/>');
price = 60;
document.write('Price is: ' + price + '<br/>');

//const - cant be redeclared & cant be re-assigned
// Block Scope
const foot = 12;

//Assignment Operators
// = (x=y), += (usage: x+=y => x=x+y), -+ (x-=y => x=x-y), *=, /=. %=, **=

let x = 20;
x -= 5;
document.write('Value of x now is: ' + x + '<br/>');

//Precedence
//BODMAS - Bracket Open Division Multiplication Addition Subsctration
let y = 100 + 50 * 3;
document.write('Value of x now is: ' + y + '<br/>');

// Data Types
let length = 25;
let firstname = 'Ramu';
let obj = {firstName: 'John', lastName: 'Doe'};
document.write(
  'Value of obj is: ' + obj.firstName + ' ' + obj.lastName + '<br/>'
);

let stringnum = 'Mandeep' + 1 + 2 + 3;
document.write('Value of stringnum now is: ' + stringnum + '<br/>');

//Arrays
//index value -> starts with 0
let array1 = ['Ramu', 'Mandeep', 'Saloni'];
array1[3] = 'Isvitha';
array1[4] = 'Adiel';

document.write('Value of array: ' + array1 + '<br/>');

let testArray = new Array();
testArray[0] = 'Apple';
testArray[1] = 'Umbrella';
testArray[2] = 'Zebra';
testArray[3] = 'Cat';
let len = testArray.length;

document.write('Value of array: ' + testArray + '<br/>');

//Arrays - Methods
document.write('Length of array: ' + testArray.length + '<br/>');
document.write('Sort of the array: ' + testArray.sort() + '<br/>');
document.write('Sort - Reverse of the array: ' + testArray.reverse() + '<br/>');
document.write('Pop - Cut the last item: ' + testArray.pop() + '<br/>');
document.write('Push - A new item: ' + testArray.push('Elephant') + '<br/>');
document.write('Display Array: ' + testArray + '<br/>');

//splice(start,delteCount)
//splice(start,indextoadd,'newitem')
let monthArray = ['Jan', 'Mar', 'Apr', 'Jun'];
document.write(
  'Display Spliced Array: ' + monthArray.splice(1, 0, 'Feb') + '<br/>'
);
document.write('Display Array: ' + monthArray + '<br/>');

document.write(
  'Display Spliced Array: ' +
    monthArray.splice(4, 1, 'May', 'Jul', 'Aug') +
    '<br/>'
);
document.write('Display Spliced Array: ' + monthArray + '<br/>');

//Loops
//For
let myMonths = ['Jan', 'Mar', 'Apr', 'Jun'];
document.write('Length: ' + myMonths.length + '<br/>');
for (i = 0; i < myMonths.length; i++) {
  document.write('For Loop - This is month - ' + myMonths[i] + '<br />');
}

//While Loop
var i = 0,
  j = 1,
  k;
while (i < 30) {
  document.write('While Loop ' + i + '<br />');
  k = i + j;
  i = j;
  j = k;
}


