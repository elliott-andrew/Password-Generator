// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  // Create prompt asking user for desired character length
  var characterLength = prompt("Please choose a password length between 8 and 128."); {
    // Determine if character length chosen is appropriate
    if (characterLength > 7 || characterLength > 129) {
      // If chosen character length is appropriate ask follow up questions
      // Would the user like lowercase characters?
      var confirmLowercase = confirm("Would you like lowercase letters?"); {
        if (confirmLowercase === true) {
          var lowercase = "abcdefghijklmnopqrstuvqxyz";
        } else { lowercase = "" }
      }
      // Would the user like uppercase characters?
      var confirmUppercase = confirm("Would you like lowercase letters?"); {
        if (confirmUppercase === true) {
          var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else { uppercase = "" }
      }
      // Would the user like numbers?
      var confirmNumbers = confirm("Would you like lowercase letters?"); {
        if (confirmNumbers === true) {
          var numbers = "1234567890";
        } else { numbers = "" }
      }
      // Would the user like special characters?
      var confirmSpecial = confirm("Would you like lowercase letters?"); {
        if (confirmSpecial === true) {
          var special = "!@#$%^&*()_+";
        } else { special = "" }
      }
    } else { alert("Please select a number between 8 and 128.") }
  }

  var possibleCharacters = lowercase.concat(uppercase, numbers, special);
  var yourPassword = "";

  for (let i = 0; i < characterLength; i++) {
    yourPassword += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  var password = yourPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("Your Password: ", yourPassword)
  console.log("Possible: ", possibleCharacters)
  console.log(characterLength)
  console.log("Lowercase: ", lowercase)
  console.log("Uppercase: ", uppercase)
  console.log("Numbers: ", numbers)
  console.log("Special: ", special)
}




  // otherwise, run remaining confirms
  //   else {
  //     var confirmLowercase = confirm("Would you like lowercase characters?");
  //     if (confirmLowercase === true) {
  //       var lowercase = "abcedfghijklmnop";
  //     } else { var lowercase = "" }
  //   }
  // }



  // if (characterLength < 8 || characterLength > 128) {
  // alert("Please choose a number between 8 and 128")
  //   } else { 
  //     var confirmLowercase = confirm("Would you like lowercase characters?")
  //   if (confirmLowercase === true)

  // }


  // // options for lowercase, uppercase, numeric, special characters
  // // lowercase options
  // var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // // uppercase options 
  // var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // // numeric optiions 
  // var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  // // special character options
  // var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]
  // // Placeholder for options selected by user
  // var chosen = []
  // // Placeholder for generated password
  // var yourPassword = []

  // // questions for password options
  // // prompt for Character length 
  // var characterLength = prompt("Choose number of password charaters between 8 and 128.");
  // // if number chosen is not between 8 and 128 return error alert 
  // if (characterLength < 8 || characterLength > 128) {
  //   alert("You must choose between 8 and 128. Please try again.")
  // }
  // // if number is between 8 and 128 ask additional questions
  // else {
  //   // confirm lowercase characters 
  //   var confirmLowercase = confirm("Would you like to include lowercase characters?");
  //   // confirm uppercase characters 
  //   var confirmUppercase = confirm("Would you like to include uppercase characters?");
  //   // confirm numbers 
  //   var confirmNumbers = confirm("Would you like to include numbers?");
  //   // confirm special characters 
  //   var confirmSpecialCharacters = confirm("Would you like to include special characters?");
  // };





  // // validate input with AT LEAST one character type selcted
  // // if no options are selected return error alert
  // if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters === false) {
  //   alert("You must say yes to at least one option! Please try again.")
  // }
  // // if all options are selected
  // else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
  //   chosen = lowercase.concat(uppercase, numbers, specialCharacters);

  // }
  // // if three options are selected 
  // else if (confirmLowercase && confirmUppercase && confirmNumbers) {
  //   chosen = lowercase.concat(uppercase, numbers);
  // } else if (confirmLowercase && confirmUppercase && confirmSpecialCharacters) {
  //   chosen = lowercase.concat(uppercase, specialCharacters);
  // } else if (confirmLowercase && confirmNumbers && confirmSpecialCharacters) {
  //   chosen = lowercase.concat(numbers, specialCharacters);
  // } else if (confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
  //   chosen = uppercase.concat(numbers, specialCharacters);
  // }
  // // if two options are seleceted 
  // else if (confirmLowercase && confirmUppercase) {
  //   chosen = lowercase.concat(uppercase);
  // } else if (confirmLowercase && confirmNumbers) {
  //   chosen = lowercase.concat(numbers);
  // } else if (confirmLowercase && specialCharacters) {
  //   chosen = lowercase.concat(specialCharacters);
  // } else if (confirmUppercase && confirmNumbers) {
  //   chosen = uppercase.concat(numbers);
  // } else if (confirmUppercase && confirmSpecialCharacters) {
  //   chosen = uppercase.concat(specialCharacters);
  // }
  // // if one option is selected 
  // else if (confirmLowercase) {
  //   chosen = lowercase;
  // } else if (confirmUppercase) {
  //   chosen = uppercase;
  // } else if (confirmNumbers) {
  //   chosen = numbers;
  // } else if (confirmSpecialCharacters) {
  //   chosen = specialCharacters;
  // }

//   // Random selection from chosen options
//   for (let i = 0; i < characterLength; i++) {
//     // Create temporary variable to hold randomly generated option
//     var passwordOptions = chosen[Math.floor(Math.random() * chosen.length)];
//     // Pushes randomly generated option to variable password
//     yourPassword.push(passwordOptions);
//   }
//   // password generated to match criteria
//   // Joins password into a string and set it's variable to randomPassword
//   var generatePassword = yourPassword.join("");

//   // generated password then displayed on page via alert or message 

//   var password = generatePassword;
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }