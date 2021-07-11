// Assignment code here

// DOM Elements




var randomPasswordFunc = {
    lower: randomLowerCase,
    upper: randomUpperCase,
    number: randomNumber,
    symbol: randomSymbol
  }
  
  
  // Functions that write all lowercase, uppercase, symbols, numbers, then all the above or just selected.
  
  function randomLowerCase() {
    var lowerResults = String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
    var confirmLower = window.confirm("Would you like to include lowercase letters in your password");
    return confirmLower;
  }
  
  function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
  }
  
  function randomSymbol() {
    var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
    return symbols[Math.floor(Math.random()* symbols.length)];
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