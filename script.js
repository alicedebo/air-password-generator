let generateBtn = document.querySelector("#generate");
let randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}


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

function generatePassword() {
  let passwordLength = window.prompt("How many characters would you like your password to be?")
  let allValues = (getRandomUpper, getRandomLower, getRandomNumber, getRandomSymbol)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.")
    // generatePassword.push(passwordLength)
    return
  } else {
    let getRandomUpper = window.confirm("Would you like to use UPPER Case Characters?");
    let getRandomLower = window.confirm("Would you like to use lower Case Characters?");
    let getRandomSymbol = window.confirm("Would you like to use $pecial Characters?");
    let getRandomNumber = window.confirm("Would you like to use Number# Characters?");
  }
   
  return getPassword(getRandomUpper, getRandomLower, getRandomSymbol, getRandomNumber, passwordLength)

}

generateBtn.addEventListener("click", writePassword);


function writePassword() {
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
