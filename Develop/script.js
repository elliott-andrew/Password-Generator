// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Begin function to find password
function writePassword() {
  // Placeholder variables for data collected 
  var lowercase = "";
  var uppercase = "";
  var numbers = "";
  var special = "";
  var yourPassword = "";
  var allCharacters = "";

  // Helper variables
  var generatedLowercase = "";
  var generatedUppercase = "";
  var generatedNumbers = "";
  var generatedSpecial = "";
  var generatedRemainder = "";

  // Create prompt asking user for desired character length
  var characterLength = prompt("Please choose a password length between 8 and 128."); {
    // Determine if character length chosen is appropriate
    if (characterLength > 7 && characterLength < 129) {
      // If chosen character length is appropriate ask follow up questions
      // Would the user like lowercase characters?
      var confirmLowercase = confirm("Would you like lowercase letters?"); {
        if (confirmLowercase === true) {
          lowercase = "abcdefghijklmnopqrstuvqxyz";
        }
      }
      // Would the user like uppercase characters?
      var confirmUppercase = confirm("Would you like uppercase letters?"); {
        if (confirmUppercase === true) {
          uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
      }
      // Would the user like numbers?
      var confirmNumbers = confirm("Would you like numbers?"); {
        if (confirmNumbers === true) {
          numbers = "1234567890";
        }
      }
      // Would the user like special characters?
      var confirmSpecial = confirm("Would you like special characters?"); {
        if (confirmSpecial === true) {
          special = "!@#$%^&*()_+";
        }
      }
      // If user did not select the proper number, alert them to try again
    } else { alert("Please select a number between 8 and 128.") }
  } if (confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSpecial === false) {
    alert("You must select at least one character option.")
  }

  // Create a string of all possible character combinations
  allCharacters = lowercase.concat(uppercase, numbers, special);

  // Guarantee all characters types are pulled from each selected option 
  // Determine the number of character options selected by the user 
  var characterDividend = [confirmLowercase, confirmNumbers, confirmSpecial, confirmUppercase].filter(Boolean).length;

  // Divide the number of options selected by the character length and round down
  var dividedCharLength = Math.floor(characterLength / characterDividend);
  // If lowercase, add equal number of characters
  if (confirmLowercase) {
    while (generatedLowercase.length < dividedCharLength) {
      generatedLowercase += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
  } // If uppercase, add equal number of characters
  if (confirmUppercase) {
    while (generatedUppercase.length < dividedCharLength) {
      generatedUppercase += uppercase[Math.floor(Math.random() * uppercase.length)];
    }
  } // If numbers, add equal number of characters
  if (confirmNumbers) {
    while (generatedNumbers.length < dividedCharLength) {
      generatedNumbers += numbers[Math.floor(Math.random() * numbers.length)];
    }
  } // If special, add equal number of characters
  if (confirmSpecial) {
    while (generatedSpecial.length < dividedCharLength) {
      generatedSpecial += special[Math.floor(Math.random() * special.length)];
    }
  }
  // After rounding down and dividing equally between all options, check for missing remainder
  var generatedCharacters = generatedLowercase.concat(generatedUppercase, generatedNumbers, generatedSpecial); {
    // If the generated characters are not equal to the desired length, add missing characters
    if (generatedCharacters.length !== characterLength) {
      var characterDifference = characterLength - generatedCharacters.length;
      // Pull randomly from any confirmed character to make up the difference
      while (generatedRemainder.length < characterDifference) {
        generatedRemainder += allCharacters[Math.floor(Math.random() * allCharacters.length)];
      }
    }
  }
  // Add all generated characters into one string
  var randomizedCharacters = generatedCharacters.concat(generatedRemainder);

  while (yourPassword.length < randomizedCharacters) {
    yourPassword += allCharacters[Math.floor(Math.random() * randomizedCharacters.length)];
  }

  yourPassword = randomizedCharacters.split('').sort(function () { return 0.5 - Math.random() }).join('');

  // Sets randomly generated password to the corresponding HTML tags
  var password = yourPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}