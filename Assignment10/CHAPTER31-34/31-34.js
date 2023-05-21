
////////Question 1////////////////

let todaysDate = new Date();
document.writeln(todaysDate + "<br>");



////////Question 2////////////////

let today = new Date();
let monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
let currentMoonth = today.getMonth();
var currentMoonthName = monthNames[currentMoonth];
document.write("Current Month :  " + currentMoonthName + "<br>");


////////Question 3////////////////
let days = new Date();
let nowday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDay = days.getDay();
let dayName = nowday[currentDay];
alert("Today is  " + dayName);


////////Question 4////////////////
let currentDate1 = new Date();
let currentDay2 = currentDate1.getDay();
if (currentDay2 === 0 || currentDay2 === 6) {
    document.write("Today is Fun" + "<br>");
}
else {
    document.write("Sorry No Fun Today" + "<br>");

}

////////Question 5////////////////
let newDate = new Date();
let newDate2 = newDate.getDate();

if (newDate2 > 16) {
    document.write("First Fifteen Days Of Month" + "<br>");
} else {
    document.write("Last Fifteen Days Of Month" + "<br>");
}

////////Question 6////////////////
let currDate = new Date();
let minutesSinceEpoch = Math.floor(currDate.getTime() / 60000);
let minutesSinceMidnight = minutesSinceEpoch;
document.write("Current Date : " + currDate + "<br>");
document.writeln("Elapsed Minutes Since January : " + minutesSinceMidnight + "<br>");


////////Question 7////////////////

var currentDate5 = new Date();
var currentHour = currentDate5.getHours();
if (currentHour < 12) {
    document.write("It's AM " + "<br>");
}
else {
    document.write("It's PM " + "<br>");
}



////////Question 8////////////////

var laterDate = new Date(2020, 11, 31);


document.writeln(laterDate + "<br>");


////////Question 9////////////////
var firstRamadan = new Date("2015-06-18");
var todayy = new Date();

var timeDiff = todayy.getTime() - firstRamadan.getTime();
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

alert(daysPassed + " days have passed since 1st Ramadan ");



////////Question 10////////////////

var referenceDate = new Date("2023-05-17");

var beginningOf2015 = new Date("2015-01-01");

var timeDiff = (referenceDate.getTime() - beginningOf2015.getTime()) / 1000;


document.write("Seconds elapsed between the reference date and the beginning of 2015 are: " + timeDiff + "<br>");


////////Question 11////////////////

var currenntDate = new Date();


var hours = currenntDate.getHours();


currenntDate.setHours(hours + 1);

document.write("Updated Date: " + currenntDate + "<br>");

////////Question 12////////////////


var cuurrentDate = new Date();

cuurrentDate.setFullYear(cuurrentDate.getFullYear() - 100);

alert("100 years back it was  " + cuurrentDate);

////////Question 13////////////////


var age = prompt("Please enter your age:");


var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;


document.write(" Your age is " + age + "<br>" + "Your birth year is: " + birthYear + "<br>");



////////Question 14////////////////

var customerName = "Farkhunda";
var currentMonth = "May";

var numberOfUnits = 200;
var chargesPerUnit = 15.50;
var latePaymentSurchargePercentage = 2.5;


var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var latePaymentSurcharge = (netAmountPayable * (latePaymentSurchargePercentage / 100)).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");

