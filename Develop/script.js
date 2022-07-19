// Assignment code here

// Function to generate password
function generatePassword() {

  // Created array of each character type
  var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialcharSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ";", ":", "[", "]", "{", "}", ",", ".", "<", ">", "=", "_", "`", "~", "|"];

 // Ask how many characters for password
 function charLength () {
  passwordLength = prompt("How many characters would you like your password? Choose a value between 8 and 128.");
 if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
  // If user inputs value outside range, error message will appear
  alert("Error! Please input a value that is between 8 and 128.");
  charLength();
 }
}
charLength()
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
