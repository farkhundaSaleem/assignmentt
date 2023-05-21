
///////// QUESTION 1 ////////////////

function calldate() {
   let todate = new Date();
   document.writeln(todate);
}
calldate();




///////// QUESTION 2 /////////////
function greet() {
   let first = prompt("Write First Name");
   let second = prompt("Write second Name");
   document.writeln("<br>" + "Welcome " + first + " " + second + "<br>");

}
greet();


///////// QUESTION 3 /////////////
function sum() {
   let firstNo = parseFloat(prompt("Enter First Num"));
   let secondNo = parseFloat(prompt("Enter second Num"));
   let num = firstNo + secondNo;
   return num;

}
let number = sum();
document.writeln("The sum of two numbers are : " + number + "<br>");



///////// QUESTION 4 /////////////

function computeOperation(num1, num2, operator) {
   let result;

   switch (operator) {
      case '+':
         result = num1 + num2;
         break;
      case '-':
         result = num1 - num2;
         break;
      case '*':
         result = num1 * num2;
         break;
      case '/':
         result = num1 / num2;
         break;
      default:
         return 'Invalid operator';
   }

   return result;
}


const num1 = 5;
const num2 = 3;
const operator = '+';

const result = computeOperation(num1, num2, operator);
document.write('Result: ' + result + "<br>");


///////// QUESTION 5 ////////////
function square(number) {
   return number * number;
}

const squaredNum = square(5);
document.write('Square of ' + 5 + ' is ' + squaredNum + "<br>");



///////// QUESTION 6 ////////////
function factorialize(num) {
   if (num === 0 || num === 1)
      return 1;
   for (var i = num - 1; i >= 1; i--) { num *= i; }

   return num;
}

document.write('Factorial of ' + 5 + ' is ' + factorialize(5) + '<br>');



///////// QUESTION 7 ////////////
function displayCounting(start, end) {
   // Validate inputs
   if (typeof start !== 'number' || typeof end !== 'number') {
      document.write('Invalid input. Please provide numbers.');
      return;
   }

   if (start > end) {
      document.write('Start number should be less than or equal to the end number.');
      return;
   }


   for (let i = start; i <= end; i++) {
      document.write(i + '<br>');
   }
}


displayCounting(1, 10);


///////// QUESTION 8 ////////////

function calculateHypotenuse(base, perpendicular) {
   function calculateSquare(number) {
      return number * number;
   }

   const baseSquare = calculateSquare(base);
   const perpendicularSquare = calculateSquare(perpendicular);
   const hypotenuseSquare = baseSquare + perpendicularSquare;
   const hypotenuse = Math.sqrt(hypotenuseSquare);

   return hypotenuse;
}


const base = 3;
const perpendicular = 4;
const hypotenuse = calculateHypotenuse(base, perpendicular);

document.write('Hypotenuse: ' + hypotenuse + "<br>");


///////// QUESTION 9 ////////////
//i///
function calculateRectangleArea(width, height) {
   return width * height;
}


const areaa = calculateRectangleArea(5, 8);
document.write(areaa + "<br>");


///ii///
function calculateRectangleArea(width, height) {
   return width * height;
}


const rectangleWidth = 5;
const rectangleHeight = 8;
const area = calculateRectangleArea(rectangleWidth, rectangleHeight);
document.write(area + "<br>");







///////// QUESTION 10 ////////////



function isPalindrome(str) {

   const formattedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

   const reversedStr = formattedStr.split('').reverse().join('');


   return formattedStr === reversedStr;
}


const string1 = "level";
console.log(isPalindrome(string1));

const string2 = "hello";
console.log(isPalindrome(string2));





///////// QUESTION 11 ////////////


function capitalizeFirstLetter(str) {

   const words = str.split(' ');


   const capitalizedWords = words.map(word => {

      return word.charAt(0).toUpperCase() + word.slice(1);
   });


   const result = capitalizedWords.join(' ');

   return result;
}

// Example usage
const inputString = 'the quick brown fox';
const outputString = capitalizeFirstLetter(inputString);
document.write(outputString + "<br>");






///////// QUESTION 12 /////////


function findLongestWord(str) {

   const words = str.split(' ');

   let longestWord = '';
   let longestLength = 0;


   for (let i = 0; i < words.length; i++) {
      const word = words[i];


      if (word.length > longestLength) {
         longestWord = word;
         longestLength = word.length;
      }
   }

   return longestWord;
}

// Example usage
const inpputString = 'Web Development Tutorial';
const longestWord = findLongestWord(inpputString);
document.write(longestWord + "<br>");


///////// QUESTION 13 /////////



function countLetterOccurrences(str, letter) {

   const lowercaseLetter = letter.toLowerCase();

   const lowercaseStr = str.toLowerCase();

   let count = 0;


   for (let i = 0; i < lowercaseStr.length; i++) {
      const currentChar = lowercaseStr[i];


      if (currentChar === lowercaseLetter) {
         count++;
      }
   }

   return count;
}

// Example usage
const inputtString = 'JSResourceS.com';
const letterToCount = 'o';
const occurrences = countLetterOccurrences(inputtString, letterToCount);
document.write(occurrences + "<br>");







///////// QUESTION 14 /////////


function calcCircumference(radius) {
   const circumference = 2 * Math.PI * radius;
   document.write("The circumference is " + circumference + "<br>");
}


function calcArea(radius) {
   const area = Math.PI * radius * radius;
   document.write("The area is " + area + "<br>");
}

// Example usage
const radius = 5;
calcCircumference(radius);
calcArea(radius);
