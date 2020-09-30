// Assignment Code
var generateBtn = document.querySelector("#generate");

// options for lowercase, uppercase, numeric, special characters
// lowercase options
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
// uppercase options 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// numeric optiions 
var numbers = "1234567890".split("");
// special character options
var specialCharacters = "!@#$%^&*()_+".split("");

// prompts for each character option 
var characterLength = prompt("Choose number of password charaters between 8 and 128.");
if (characterLength < 8 || characterLength > 128) {
  alert("You must choose between 8 and 128. Please try again.")
}
else {
  var confirmLowercase = confirm("Would you like to include lowercase characters?");
  var confirmUppercase = confirm("Would you like to include uppercase characters?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmSpecialCharacters = confirm("Would you like to include special characters?");
};

if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters === false) {
  alert("You must say yes to at least one option! Please try again.")
}

console.log(characterLength);
console.log(confirmLowercase);
console.log(confirmUppercase);
console.log(confirmNumbers);
console.log(confirmSpecialCharacters);


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
