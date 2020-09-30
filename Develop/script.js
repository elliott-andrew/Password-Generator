// Assignment Code
var generateBtn = document.querySelector("#generate");

// button to activate prompts
// prompts for each character option 
var characterLength = prompt("How many characters would you like your password to be?");
var confirmLowercase = confirm("Would you like to include lowercase characters?");
var confirmUppercase = confirm("Would you like to include uppercase characters?");
var confirmNumbers = confirm("Would you like to include numbers?");
var confirmSpecialCharacters = confirm("Would you like to include special characters?");

console.log(characterLength);
console.log(confirmLowercase);
console.log(confirmUppercase);
console.log(confirmNumbers);
console.log(confirmSpecialCharacters);

// options for lowercase, uppercase, numeric, special characters
// lowercase options
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// uppercase options 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// numeric optiions 
var numbers = "1234567890"
// special character options
var specialCharacters = "!@#$%^&*()_+"

// validate input with AT LEAST one character type seelcted
// if at least one character type selected 
// if no character types selected 

// password generated to match criteria
// generated password then displayed on page via alert or message 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
