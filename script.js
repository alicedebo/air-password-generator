// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Click button to generate password.
//When button is clicked, series of prompts for password criteria.
//when prompted, select criteria to include in the password
//length of pass must be between 8-128
//prompt character types, confirm to include lowercase, uppercase, numeric, and/or special characters.
//when answer prompts, input should be validated and at least one character type should be selected.
//when all prompts answered, password is generated that matches selected criteria.
//when pass is generated, pass is displayed in an alert or written to the page.