let generateBtn = document.querySelector("#generate");
const randomFunc = [getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol]


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

function getPassword(getRandomUpper, getRandomLower, getRandomSymbol, getRandomNumber, passwordLength){
let password = ""
for (let i = 0; i < passwordLength; i++) {
  if (Math.random() < 0.2){
    password += getRandomUpper();
  }
    else if (Math.random() <= 0.4){
      password += getRandomLower();
    }
    else if (Math.random() >= 0.8){
      password += getRandomSymbol();
    }
    else if (Math.random() <= 0.6){
      password += getRandomNumber();
    }
  }
  return password
}

// console.log(getRandomUpper());
// console.log(getRandomLower());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());


function generatePassword() {
  
  let passwordLength = window.prompt("How many characters would you like your password to be?")

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.")
    // generatePassword.push(passwordLength)
    return
  } else {
    let getRandomUpper = window.confirm("Would you like to use Upper Case Characters?");
    let getRandomLower = window.confirm("Would you like to use Lower Case Characters?");
    let getRandomSymbol = window.confirm("Would you like to use Special Characters?");
    let getRandomNumber = window.confirm("Would you like to use Number Characters?");

    
    // for (let i = 0; i < passwordLength; i++) {
    //   passwordLength + randomFunc; 
    //   generatePassword = randomFunc;
    // }
  }
  return getPassword(getRandomUpper, getRandomLower, getRandomSymbol, getRandomNumber, passwordLength)
}


generateBtn.addEventListener("click", writePassword);


function writePassword() {
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

 
  //store that response in a variable/array
  //comfirm for use lower case letters
  //comfirm for upper case letters
  //confirm for special characters
  //confirm for numbers
  //create an array of lower case, upper case, special, and numbers
  // randomly generate the included characters. math.random, math.floor
  // mix them up into random string




// Click button to generate password.
// When button is clicked, series of prompts for password criteria.
// when prompted, select criteria to include in the password
// length of pass must be between 8-128
// prompt character types, confirm to include lowercase, uppercase, numeric, and/or special characters.
// when answer prompts, input should be validated and at least one character type should be selected.
// when all prompts answered, password is generated that matches selected criteria.
// when pass is generated, pass is displayed in an alert or written to the page.