// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function reverseString1(str) {
//   let splited = str.split('');
//   splited.reverse();
//   let joined = splited.join("")
//   return joined
// }


// console.log(reverseString1('akindele'))

// function reverseString2(str) {
//   return str.split('').reverse().join("")
// }

// console.log(reverseString2('akintunde'))

// function returnEvenOrOdd(num) {
//   if(num % 2) {
//     return "Odd"
//   }
//   return "Even"
// }

// let returnEvenOrOdd = num => num % 2 ? "Odd" : "Even"

// console.log(returnEvenOrOdd(412));

// Count Vowels

// function countVowels(str) {
//   let vowels = 0
//   str.split("").map(letter => {
//     if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//       vowels += 1
//     }
//   })
//   return vowels

// }

// console.log(countVowels("afolabi"))

// function greet(name) {
//   return (name === "Johny" ? 'Hello, my love!' : `Hello, ${name}!`)
// }

// console.log(greet("Afolabi"))

// IS N DIVISIBLE BY X AND Y

// function isDivisible(n, x, y) {
//   return  (n % x || n % y) ?  false : true
// }

// console.log(isDivisible(6, 3, 6));

// function findSmallestNum(arr) {

//   let smallestNum

//   arr.forEach((item, index) => {
//     if(index === 0) {
//       smallestNum = item;
//     }

//     if(item < smallestNum) {
//       smallestNum = item
//     }
//   })

//   return smallestNum
// }

// console.log(findSmallestNum([33, -2, 5, 6, 31, 1]))

// function summation(arr) {
//   let num = 0;
//   arr.map(item => {
//     num += item
//   })

//   return num
// }

// console.log(summation([4, 4, 65]));

// function summation2(num) {
//   let start = 0;
//   for(let i = 0; i <= num ; i++) {
//     start += i 
//     // console.log("Hi" +i)  
//   }
//   return start
// }

// console.log(summation2(8));

function average(scores) {
  let total = 0
  scores.forEach(score => {
    total += score
  })

  let result = total/scores.length
  let res = Math.floor(result)
  return res
}

console.log(average([2, 4, 5, 7,8]))