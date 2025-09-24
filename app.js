
// Chapter 38 to 42

// Question 1

// function power(a, b) {
//   let result = 1

//   for (let i = 1; i <= b; i++) {
//     result *= a
//   }

//   return result
// }

// let base = parseInt(prompt("Enter base (a):"))
// let exponent = parseInt(prompt("Enter exponent (b):"))

// let answer = power(base, exponent)
// alert(base + " raised to " + exponent + " is " + answer)

// Question 2

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true; 
//   } else if (year % 100 === 0) {
//     return false; 
//   } else if (year % 4 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// let year = parseInt(prompt("Enter a year:"))
// if (isLeapYear(year)) {
//   alert(year + " is a Leap Year")
// } else {
//   alert(year + " is NOT a Leap Year")
// }


// Question 3

// function semiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }

// function areaOfTriangle(a, b, c) {
//   let S = semiPerimeter(a, b, c);
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area;
// }

// let a = parseFloat(prompt("Enter side a:"));
// let b = parseFloat(prompt("Enter side b:"));
// let c = parseFloat(prompt("Enter side c:"));

// let area = areaOfTriangle(a, b, c);
// alert("Area of triangle is: " + area.toFixed(2));


// Question 4

// function averageFunction(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3
// }

// function percentageFunction(m1, m2, m3) {
//   let total = m1 + m2 + m3
//   return (total / 300) * 100
// }

// function mainFunction(m1, m2, m3) {
//   let avg = averageFunction(m1, m2, m3)
//   let perc = percentageFunction(m1, m2, m3)

//   console.log("Average marks: " + avg.toFixed(2));
//   console.log("Percentage: " + perc.toFixed(2) + "%")
// }

// let m1 = parseInt(prompt("Enter marks for Subject 1:"))
// let m2 = parseInt(prompt("Enter marks for Subject 2:"))
// let m3 = parseInt(prompt("Enter marks for Subject 3:"))

// mainFunction(m1, m2, m3)

// Question 5

// function myIndexOf(str, ch) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       return i
//     }
//   }
//   return -1
// }

// console.log(myIndexOf("hello", "e"))
// console.log(myIndexOf("hello", "l"))
// console.log(myIndexOf("hello", "z"))


// Question 6

// function deleteVowels(sentence) {
//   var result = ""

//   for (var i = 0; i < sentence.length; i++) {
//     var ch = sentence[i].toLowerCase()

//     // Check if it's a vowel
//     switch (ch) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         // skip vowel
//         break;
//       default:
//         result += sentence[i]
//     }
//   }

//   return result
// }

// // Example usage
// var sentence = prompt("Enter a sentence (max 25 characters):")
// var newSentence = deleteVowels(sentence)

// alert("Sentence without vowels: " + newSentence)


// Question 7

// function countVowelPairs(text) {
//    var count = 0;
//     text = text.toLowerCase()

//     for (var i = 0; i < text.length; i++) {
//         var ch1 = text[i]
//         var ch2 = text[i + 1]

//         if (isVowel(ch1) && isVowel(ch2)) {
//             count++;
//             console.log("Found pair: " + ch1 + ch2);
//         }
//     }

//     return count;
// }

// function isVowel(ch) {
//     switch (ch) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }


// var sentence = "Pleases read this application and give me gratuity";
// var result = countVowelPairs(sentence);
//  console.log("Total vowel pairs: " + result);


// Question 8

// function meters(km) {
//   var meters = km * 1000
//   console.log("Distance in meters: " + meters)
// }

// function feets(km) {
//   var feet = km * 3280.84
//   console.log("Distance in feet: " + feet)
// }

// function inches(km) {
//   var inches = km * 39370.1
//   console.log("Distance in inches: " + inches)
// }

// function centimeters(km) {
//  var cm = km * 100000
//   console.log("Distance in centimeters: " + cm)
// }

// var km = parseFloat(prompt("Enter distance between two cities (in km):"))

// meters(km)
// feets(km)
// inches(km)
// centimeters(km)


// Question 9

// function overTime(hoursWorked) {
//     var overTimePay = 0

//     if (hoursWorked > 40) {
//         var overTimeHours = hoursWorked - 40
//         overTimePay = overTimeHours * 12
//     }

//     return overTimePay;
// }


// var hours = parseInt(prompt("Enter total hours worked:"))
// var pay = overTime(hours)

// alert("Overtime pay is Rs. " + pay)


// Question 10

// function withdrawCash(amount) {
//     var n100 = 0, n50 = 0, n10 = 0, n1 = 0;

//     do {
//         switch (true) {
//             case (amount >= 100):
//                 n100++;
//                 amount -= 100;
//                 break;

//             case (amount >= 50):
//                 n50++;
//                 amount -= 50;
//                 break;

//             case (amount >= 10):
//                 n10++;
//                 amount -= 10
//                 break;

//              case (amount >= 1):
//                 n1++;
//                 amount -= 1
//                 break;

//             default:
//                 amount = 0
//         }
//     } while (amount > 0)

//     return { n100, n50, n10, n1 }
// }

// var amount = parseInt(prompt("Enter amount to withdraw:"))
// var result = withdrawCash(amount)

// alert(
//     "You will have " +
//     result.n100 + " hundred notes " + result.n50 + " fifty notes " + result.n10 + " ten notes and " + result.n1 + " one coins. ")
