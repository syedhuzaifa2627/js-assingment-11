
// Chapter 38 to 42

// // Q1: Power function
// function power(a, b) {
//   return a ** b;
// }
// console.log("Q1:", power(2, 3)); // 8

// // Q2: Leap year check
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log("Q2:", isLeapYear(2024)); // true

// // Q3: Triangle Area using two functions
// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }
// function triangleArea(a, b, c) {
//   let s = calculateS(a, b, c);
//   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// console.log("Q3:", triangleArea(3, 4, 5)); // 6

// // Q4: Marks, Average & Percentage
// function average(m1, m2, m3) {
//   return (m1 + m2 + m3) / 3;
// }
// function percentage(m1, m2, m3) {
//   let total = m1 + m2 + m3;
//   return (total / 300) * 100;
// }
// function mainFunction(m1, m2, m3) {
//   console.log("Average:", average(m1, m2, m3));
//   console.log("Percentage:", percentage(m1, m2, m3).toFixed(2) + "%");
// }
// console.log("Q4:");
// mainFunction(80, 90, 70);

// // Q5: Custom indexOf
// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) return i;
//   }
//   return -1;
// }
// console.log("Q5:", customIndexOf("hello", "e")); // 1

// // Q6: Delete all vowels
// function removeVowels(sentence) {
//   return sentence.replace(/[aeiouAEIOU]/g, "");
// }
// console.log("Q6:", removeVowels("Hello World"));

// // Q7: Count vowel pairs
// function countVowelPairs(text) {
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();
//     switch (pair) {
//       case "aa": case "ae": case "ai": case "ao": case "au":
//       case "ea": case "ee": case "ei": case "eo": case "eu":
//       case "ia": case "ie": case "ii": case "io": case "iu":
//       case "oa": case "oe": case "oi": case "oo": case "ou":
//       case "ua": case "ue": case "ui": case "uo": case "uu":
//         count++;
//         break;
//     }
//   }
//   return count;
// }
// console.log("Q7:", countVowelPairs("Pleases read this application and give me gratuity"));

// // Q8: Distance conversion
// function toMeters(km) { return km * 1000; }
// function toFeet(km) { return km * 3280.84; }
// function toInches(km) { return km * 39370.1; }
// function toCentimeters(km) { return km * 100000; }
// console.log("Q8:", toMeters(1), "m,", toFeet(1), "ft,", toInches(1), "in,", toCentimeters(1), "cm");

// // Q9: Overtime pay
// function overtimePay(hoursWorked) {
//   if (hoursWorked > 40) {
//     return (hoursWorked - 40) * 12;
//   }
//   return 0;
// }
// console.log("Q9:", overtimePay(45)); // 60

// // Q10: Currency notes
// function currencyNotes(amount) {
//   let hundreds = Math.floor(amount / 100);
//   let fifty = Math.floor((amount % 100) / 50);
//   let ten = Math.floor(((amount % 100) % 50) / 10);
//   return { hundreds, fifty, ten };
// }
// console.log("Q10:", currencyNotes(880)); // {hundreds: 8, fifty: 1, ten: 

