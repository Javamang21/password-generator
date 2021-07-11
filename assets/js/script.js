
// Assignment code here

// Variables with values, and variables we will use later. 

var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(upperCase.length);

// This is a function for each prompt

function passwordGenerator() {
    var passLength = prompt("Please choose a password that is no less than 8 characters and no more than 128 characters");
        
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