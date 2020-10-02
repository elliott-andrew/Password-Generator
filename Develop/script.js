// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  // Placeholder variables for data collected 
  var lowercase = "";
  var uppercase = "";
  var numbers = "";
  var special = "";
  var yourPassword = "";

  // Create prompt asking user for desired character length
  var characterLength = prompt("Please choose a password length between 8 and 128."); {
    // Determine if character length chosen is appropriate
    if (characterLength > 7 && characterLength < 129) {
      // If chosen character length is appropriate ask follow up questions
      // Would the user like lowercase characters?
      var confirmLowercase = confirm("Would you like lowercase letters?"); {
        if (confirmLowercase === true) {
          var lowercase = "abcdefghijklmnopqrstuvqxyz";
        }
      }
      // Would the user like uppercase characters?
      var confirmUppercase = confirm("Would you like uppercase letters?"); {
        if (confirmUppercase === true) {
          var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
      }
      // Would the user like numbers?
      var confirmNumbers = confirm("Would you like numbers?"); {
        if (confirmNumbers === true) {
          var numbers = "1234567890";
        }
      }
      // Would the user like special characters?
      var confirmSpecial = confirm("Would you like special characters?"); {
        if (confirmSpecial === true) {
          var special = "!@#$%^&*()_+";
        }
      }
      // If user did not select the proper number, alert them to try again
    } else { alert("Please select a number between 8 and 128.") }
  }

  // Create a string of all possible character combinations
  var possibleCharacters = lowercase.concat(uppercase, numbers, special);

  // Loop to pull randomly from possible characters
  for (let i = 0; i < characterLength; i++) {
    yourPassword += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  // Sets randomly generated password to the corresponding HTML tags
  var password = yourPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}