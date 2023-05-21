
/////// QUESTION 1 ////////


function power(a, b) {
    return Math.pow(a, b);
  }
document.writeln(power(2,3) + "<br>");  



/////// QUESTION 2 ////////


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }

document.writeln(isLeapYear(2023)+ "<br>"); 




/////// QUESTION 3 ////////


function calculateS(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateTriangleArea(a, b, c) {
    var s = calculateS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
  
 
  document.writeln(calculateTriangleArea(3, 4, 5)+ "<br>");



  /////// QUESTION 4 ////////


  function calculateAverage(marks) {
    var sum = marks.reduce(function (total, mark) {
      return total + mark;
    }, 0);
    
    return sum / marks.length;
  }
  
  function calculatePercentage(totalMarks, obtainedMarks) {
    return (obtainedMarks / totalMarks) * 100;
  }
  
  function mainFunction() {
    var subjectMarks = [80, 75, 90];
    var totalMarks = 100;
    
    var average = calculateAverage(subjectMarks);
    var percentage = calculatePercentage(totalMarks * subjectMarks.length, average * subjectMarks.length);
    
    document.writeln("Average Marks: " + average+ "<br>");
    document.writeln("Percentage: " + percentage + "%"+ "<br>");
  }
  
  
  mainFunction();


  /////// QUESTION 5 ////////

  function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        return i;
      }
    }
    return -1;
  }
  

  var sentence = "Hello, World!";
  document.writeln(customIndexOf(sentence, "o") + "<br>");


  /////// QUESTION 6 ////////


  function deleteVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = '';
  
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence.charAt(i).toLowerCase();
      if (!vowels.includes(char)) {
        result += sentence.charAt(i);
      }
    }
  
    return result;
  }
  

  var input = "Hello, World!";
 document.writeln(deleteVowels(input)  + "<br>");


   /////// QUESTION 7 ////////


   function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    text = text.toLowerCase();
  
    for (var i = 0; i < text.length - 1; i++) {
      var currentChar = text.charAt(i);
      var nextChar = text.charAt(i + 1);
  
      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (vowels.includes(nextChar)) {
            count++;
          }
          break;
        default:
          break;
      }
    }
  
    return count;
  }
  

  var sentence = "Pleases read this application and give me gratuity";
 document.writeln(countSuccessiveVowels(sentence)  + "<br>"); 
  
  
   /////// QUESTION 8 ////////



   function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
  }
  
  function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
  }
  
  function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
  }
  
  function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
  }
  
  function printDistanceConversions(distanceInKm) {
    var meters = convertToMeters(distanceInKm);
    var feet = convertToFeet(distanceInKm);
    var inches = convertToInches(distanceInKm);
    var centimeters = convertToCentimeters(distanceInKm);
  
    document.writeln("Distance in meters: " + meters + " m" + "<br>");
    document.writeln("Distance in feet: " + feet + " ft" + "<br>");
    document.writeln("Distance in inches: " + inches + " in" + "<br>");
    document.writeln("Distance in centimeters: " + centimeters + " cm" + "<br>");
  }
  
 
  var distance = 100; 
  printDistanceConversions(distance);
  
   /////// QUESTION 9 ////////


   function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;
    
    if (hoursWorked <= regularHours) {
      return 0;
    }
    
    const overtimeHours = hoursWorked - regularHours;
    const overtimePay = overtimeHours * overtimeRate;
    
    return overtimePay;
  }
  
  const hours = 45;
  const overtimePay = calculateOvertimePay(hours);
 document.writeln("Overtime pay: Rs.", overtimePay.toFixed(2) +"<br>");
  
   /////// QUESTION 10 ////////
   function calculateCurrencyNotes(amountInHundreds) {
    const note100 = 100;
    const note50 = 50;
    const note10 = 10;
    
    // Calculate the number of notes for each denomination
    const num100Notes = Math.floor(amountInHundreds);
    const remainingAmount = amountInHundreds - num100Notes;
    
    const num50Notes = Math.floor(remainingAmount / note50);
    const num10Notes = Math.floor((remainingAmount % note50) / note10);
    
    // Create an object to store the results
    const notes = {
      "100": num100Notes,
      "50": num50Notes,
      "10": num10Notes
    };
    
    return notes;
  }
  
 
  const amount = 5; // Amount in hundreds (e.g., 5 x 100 = Rs. 500)
  const notes = calculateCurrencyNotes(amount);
  document.writeIn("Number of 100 notes:", notes["100"] + "<br>");
  
  document.writeIn("Number of 50 notes:", notes["50"] + "<br>");
  document.writeIn("Number of 10 notes:", notes["10"] + "<br>");
  