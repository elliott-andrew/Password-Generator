// Assignment Code
var generateBtn = document.querySelector("#generate");

// button to activate prompts
// prompts for each option 
prompt("How many characters would you like your password to be?")
prompt("Would you like to include lowercase characters?")
prompt("Would you like to include uppercase characters?")
prompt("Would you like to include numbers?")
prompt("Would you like to include special characters?")
// options for each password
// choose length of the password <= 128 characters
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
