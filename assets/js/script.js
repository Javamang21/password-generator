// Write password to the #password input
function writePassword() {
    var password = passwordGenerator();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }

  var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// Function that iterates and prints the results

function passwordGenerator() {
    
    var selectedCharacters = [];
    var finalPassword = [];

// Variables with values, and variables we will use later. 

var specialCharacters = ["!", "#", "$", "%", "&", "*", "+", "-", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// List of all the password prompt questions for the user
    var passwordLength = window.prompt ("Please choose a password that is no less than 8 characters and no more than 128 characters");
        if (passwordLength < 8 || passwordLength > 128) {
            window.alert ("Password length must be a number that is no less than 8 characters and no more than 128 characters, please try again!");
            return passwordGenerator();
        }
// Confirm prompt for special characters
            var specialCharacterPrompt = window.confirm ("Would you like special characters in your password ?");
                if (specialCharacterPrompt === true) {
                    selectedCharacters = selectedCharacters.concat(specialCharacters);
                    console.log(selectedCharacters);
                }
// Confirm prompt for numbers
                var numbersPrompt = window.confirm ("Would you like numbers in your password ?");
                if (numbersPrompt === true) {
                    selectedCharacters = selectedCharacters.concat(numbers);
                    console.log(selectedCharacters);
                }
// Confirm prompt for lower case 
                var lowerCasePrompt = window.confirm ("Would you like lower-case letters in your password ?");
                if (lowerCasePrompt === true) {
                    selectedCharacters = selectedCharacters.concat(lowerCase);
                    console.log(selectedCharacters);
                }
// Confirm Prompt for upper case
                var upperCasePrompt = window.confirm ("Would you like upper-case letters in your password ?");
                if (upperCasePrompt === true) {
                    selectedCharacters = selectedCharacters.concat(upperCase);
                    console.log(selectedCharacters);
                }

// Final check to make sure they didn't say no for each password prompt selection

                if (specialCharacterPrompt === false && numbersPrompt === false && lowerCasePrompt === false && upperCasePrompt === false) {
                    window.alert("In order to create your password you must select at least ONE character type !");
                    return passwordGenerator();
                }
        
        for (var i = 0; i < passwordLength; i++) {
            finalPassword = finalPassword + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
          }
        
          return finalPassword;
    
        }


    


