// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  // options for lowercase, uppercase, numeric, special characters
  // lowercase options
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // uppercase options 
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // numeric optiions 
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // special character options
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  var chosen = []
  var yourPassword = []

  console.log("Lowercase: ", lowercase);
  console.log("Uppercase: ", uppercase);
  console.log("Numbers: ", numbers);
  console.log("Special Characters: ", specialCharacters);

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

  console.log("Character Length: ", characterLength);
  console.log("Confirm Lowercase: ", confirmLowercase);
  console.log("Confirm Uppercase: ", confirmUppercase);
  console.log("Confirm Numbers: ", confirmNumbers);
  console.log("Confirm Special Characters: ", confirmSpecialCharacters);

  // validate input with AT LEAST one character type selcted
  // if no options are selected return error alert
  if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters === false) {
    alert("You must say yes to at least one option! Please try again.")
  }
  // if all options are selected
  else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
    chosen = lowercase.concat(uppercase, numbers, specialCharacters);

  }
  // if three options are selected 
  else if (confirmLowercase && confirmUppercase && confirmNumbers) {
    chosen = lowercase.concat(uppercase, numbers);
  } else if (confirmLowercase && confirmUppercase && confirmSpecialCharacters) {
    chosen = lowercase.concat(uppercase, specialCharacters);
  } else if (confirmLowercase && confirmNumbers && confirmSpecialCharacters) {
    chosen = lowercase.concat(numbers, specialCharacters);
  } else if (confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
    chosen = uppercase.concat(numbers, specialCharacters);
  }
  // if two options are seleceted 
  else if (confirmLowercase && confirmUppercase) {
    chosen = lowercase.concat(uppercase);
  } else if (confirmLowercase && confirmNumbers) {
    chosen = lowercase.concat(numbers);
  } else if (confirmLowercase && specialCharacters) {
    chosen = lowercase.concat(specialCharacters);
  } else if (confirmUppercase && confirmNumbers) {
    chosen = uppercase.concat(numbers);
  } else if (confirmUppercase && confirmSpecialCharacters) {
    chosen = uppercase.concat(specialCharacters);
  }
  // if one option is selected 
  else if (confirmLowercase) {
    chosen = lowercase;
  } else if (confirmUppercase) {
    chosen = uppercase;
  } else if (confirmNumbers) {
    chosen = numbers;
  } else if (confirmSpecialCharacters) {
    chosen = specialCharacters;
  }

  console.log(chosen);

  // Random selection from chosen options
  for (let i = 0; i < characterLength; i++) {
    // Create temporary variable to hold randomly generated option
    var passwordOptions = chosen[Math.floor(Math.random() * chosen.length)];
    // Pushes randomly generated option to variable password
    yourPassword.push(passwordOptions);
  }
  // password generated to match criteria
  // Joins password into a string and set it's variable to randomPassword
  var generatePassword = yourPassword.join("");

  console.log("Random password: ", generatePassword);

  // generated password then displayed on page via alert or message 

  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}