// Assignment Code
var generateBtn = document.querySelector("#generate");

// options for lowercase, uppercase, numeric, special characters
// lowercase options
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase options 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// numeric optiions 
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// special character options
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]

// questions for password options
// prompt for Character length 
var characterLength = prompt("Choose number of password charaters between 8 and 128.");
// if number chosen is not between 8 and 128 return error alert 
if (characterLength < 8 || characterLength > 128) {
  alert("You must choose between 8 and 128. Please try again.")
}
// if number is between 8 and 128 ask additional questions
else {
  // confirm lowercase characters 
  var confirmLowercase = confirm("Would you like to include lowercase characters?");
  // confirm uppercase characters 
  var confirmUppercase = confirm("Would you like to include uppercase characters?");
  // confirm numbers 
  var confirmNumbers = confirm("Would you like to include numbers?");
  // confirm special characters 
  var confirmSpecialCharacters = confirm("Would you like to include special characters?");
};
// validate input with AT LEAST one character type selcted
// if no option is true return error alert 
if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters === false) {
  alert("You must say yes to at least one option! Please try again.")
}
// if at least one option is selected generate password 
else (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters === true); {
  chosen = lowercase.concat(uppercase, numbers, specialCharacters);
}
console.log(chosen);

var password = [""];

for (var i = 0; i < characterLength; i++) {
  // Generate a random decimal number between 0 and 1
  var characters = Math.floor(Math.random() * chosen.length);

  // Display in console
  console.log(chosen[characters]);
}


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
