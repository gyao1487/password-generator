//GENERATE PASSWORD BUTTON
var generateBtn = document.querySelector("#generate");

//Function to generate random number
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Function to pick random character from a list
function getRandomCharacter(list) {
  return list[randomInt(0, list.length - 1)]
}

//Function to generate password
function generatePassword() {
  //Password length criteria - includes what happens if user input is not a number or not between 8-128
  var Userlength = window.prompt("How long would you like your password to be? (type a whole number from 8 to 128)")
  var passwordlength = parseInt(Userlength)

  if (isNaN(passwordlength)) {
    window.alert("Hey, that's not a valid number! Please try again.")
    return
  }

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("The password must be between 8 to 128 characters in length. Please try again.")
    return
  }

  //Character type criteria
  var lowercaseYes = window.confirm("Would you like your password to include lowercase letters?");
  var uppercaseYes = window.confirm("Would you like your password to include uppercase letters?");
  var numbersYes = window.confirm("Would you like your password to include numeric characters?");
  var specialYes = window.confirm("Would you like your password to special characters?");

  //Character lists
  var lowercaseList = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numbersList = '1234567890'.split('');
  var specialList = '~`!@#$%^&*()_+-=[]{};:,.<>/?*'.split('');


  //Variable to hold selected character lists
  var selectedCharacters = [];

  //Conditional statements to add character lists based on selected criteria
  if (lowercaseYes) {
    selectedCharacters.push(lowercaseList)
  }

  if (uppercaseYes) {
    selectedCharacters.push(uppercaseList)
  }

  if (numbersYes) {
    selectedCharacters.push(numbersList)
  }

  if (specialYes) {
    selectedCharacters.push(specialList)
  }

  //Alert if user does not select at least one character type
  if (selectedCharacters.length === 0) {
    window.alert("You must select at least one character type! Please try again.")
    return
  }


  //Generated password string
  var generatedPassword = ""

  //for loop for randomly selecting characters
  for (var i = 0; i < passwordlength; i++) {
    var randomList = getRandomCharacter(selectedCharacters)
    var randomCharacters = getRandomCharacter(randomList)
    generatedPassword += randomCharacters
  }

  return generatedPassword 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


//COPY PASSWORD BUTTON
var copyBtn = document.querySelector("#copy");

//Function to copy the password
copyBtn.addEventListener("click", copyPassword);

function copyPassword(event) {
  var copyText = document.querySelector ("#password");
  copyText.select(event);
  copyText.setSelectionRange(0,99999);
  navigator.clipboard.writeText(copyText.value)
  //error message if password has not been generated
  if (copyText.value === "") {
    window.alert ("There is nothing to copy! Please generate the password and try again.")
    return
  }
  //success message
  alert("Congratulatons! Your new password has been copied to the clipboard.")
}


