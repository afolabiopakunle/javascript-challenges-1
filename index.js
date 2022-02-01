// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function reverseString1(str) {
  let splited = str.split('');
  splited.reverse();
  let joined = splited.join("")
  return joined
}


console.log(reverseString1('akindele'))