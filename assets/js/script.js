// Variables with values, and variables we will use later. 

var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerCase = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// This will include everything the user agrees to

var selectedCharacters = [];

//this is an empty array, in order to combine all the characters and mix them up for the randomized password
var finalPassword = [];

// List of all the password prompt questions for the user

function passwordPrompts() {
    var passLength = window.prompt ("Please choose a password that is no less than 8 characters and no more than 128 characters");
        if (passLength < 8 || passLength > 128) {
            window.alert ("Password length must be no less than 8 characters and no more than 128 characters, please try again!");
        }
            else if (passLength === '' || passLength instanceof String) { 
                window.alert ("Password length must be a number between 8 and 128, please try again!");
            }
            else {
                return passwordPrompts();
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

                    return passwordPrompts();
                }
        }
