var generateBtn = document.querySelector("#generate");
var useUpperCase = []
//Sets the standard for where they pull from.
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
  const symbols = "!@#$%^&*_-=+;:'}{][?|/<>,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


//how the calculations work
function getPassword(useUpperCase, useLowerCase, useSpecial, useNumbers, passwordLength){
  var randomArray= []
  var randomFunc = {}
  
  if (useUpperCase === true){
    randomFunc.trueUpper = getRandomUpper
    randomArray.push("trueUpper")
  }
  if (useLowerCase === true){
    randomFunc.trueLower = getRandomLower
    randomArray.push("trueLower")
  }
  if (useSpecial === true){
    randomFunc.trueSymbol = getRandomSymbol
    randomArray.push("trueSymbol")
  }
  if (useNumbers === true){
    randomFunc.trueNumbers = getRandomNumber
    randomArray.push("trueNumbers")
  }

  var password = ""
  const typesCount = useUpperCase + useLowerCase + useSpecial + useNumbers;
  if (typesCount === 0)
  return ""
  for (let i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * randomArray.length)
  randomFunc[randomArray[randomNumber]]
  password += randomFunc[randomArray[randomNumber]]();
}
return password
}
//asks user for criteria
function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to be?")
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128.")
  } else {
    var useUpperCase = window.confirm("Would you like to include UPPER case characters?");
    var useLowerCase = window.confirm("Would you like to include lower case characters?");
    var useSpecial = window.confirm("Would you like to include $pecial characters?");
    var useNumbers = window.confirm("Would you like to include Numbers#?");
  }
   return getPassword(useUpperCase, useLowerCase, useSpecial, useNumbers, passwordLength)
}
//pushes to DOM
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//button function
generateBtn.addEventListener("click", writePassword);