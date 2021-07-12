let generateBtn = document.querySelector("#generate");
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// generator functions
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*_-=+;:'}{][?|/<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomNumber());
console.log(getRandomSymbol());

function generatePassword() {
  // var randompassword 
  //make a generate password
  //create a prompt for password length
  let passwordLength = window.prompt("How many characters would you like your password to be?")

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.")
    return
  } else {
    let useUpperCase = window.confirm("Would you like to use Upper Case Characters?");
    let useLowerCase = window.confirm("Would you like to use Lower Case Characters?");
    let useSpecial = window.confirm("Would you like to use Special Characters?");
    let useNumber = window.confirm("Would you like to use Number Characters?");
  }
    // console.log(useSpecial);
    // console.log(useNumber);
    // console.log(useLowerCase);
    // console.log(useUpperCase);
    // console.log(passwordLength);
  }
  //store that response in a variable/array
  //comfirm for use lower case letters
  //comfirm for upper case letters
  //confirm for special characters
  //confirm for numbers
  //create an array of lower case, upper case, special, and numbers
  // randomly generate the included characters. math.random, math.floor
  // mix them up into random string
  
  
  // return randompassword.join()


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
 
 

}

 generateBtn.addEventListener("click", writePassword);




//Click button to generate password.
//When button is clicked, series of prompts for password criteria.
//when prompted, select criteria to include in the password
//length of pass must be between 8-128
//prompt character types, confirm to include lowercase, uppercase, numeric, and/or special characters.
//when answer prompts, input should be validated and at least one character type should be selected.
//when all prompts answered, password is generated that matches selected criteria.
//when pass is generated, pass is displayed in an alert or written to the page.