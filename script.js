// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function to generate random number
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

//Function to pick random character from a list
function randomCharacter(list)

//Function to generate password
function generatePassword() {
  //Password length criteria - includes what happens if user input is not a number or not between 8-128
  var length = window.prompt("How long would you like your password to be? (type a number from 8 to 128)")
  var passwordlength = parseInt(length)

  if (isNaN(passwordlength)) {
    window.alert("Hey, that's not a number! Please try again.")
    return
  }

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("The password must be between 8 to 128 characters in length. Please try again.")
    return
  }

  //Character type criteria
  var lowercaseYes = window.confirm("Would you like your password to include lowercase letters?")
  var uppercaseYes = window.confirm("Would you like your password to include uppercase letters?")
  var numbersYes = window.confirm("Would you like your password to include numeric characters?")
  var specialYes = window.confirm("Would you like your password to special characters?")

  //Character lists
  var lowercaseList = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var uppercaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numbersList = '1234567890'.split('');
  var specialList = '~`!@#$%^&*()_+-=[]{};:,.<>/?*'.split('');


  //Variable to hold selected character lists
  var selectedCharacters = []

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

  //Generated password string
  var generatedPassword = ""

  //for loop for randomly selecting characters
  for (var i = 0; i < passwordlength; i++) {
    var randomCharacter = selectedCharacters[randomInt(0, optionsCart.length - 1)]
  }


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
