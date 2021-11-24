// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var characters = prompt("Please enter a password with at least 8 characters, but no more than 128 characters.");
var totalCharacters = parseInt(characters);
if (totalCharacters >= 8 && totalCharacters <= 128) {
  var newPassword = [];
  var possibleCharacters = [];
  var letters = "qwertyuiopasdfghjklzxcvbn".split('');
  var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
  var numbers = "1234567890".split('');
  var symbols = "?#$%^&*()".split('');
  var hasLowercase = confirm("add lowercase letters"); 
  var hasUppercase = confirm("add the tall letters"); 
  var hasNumbers = confirm("add some numbers too");
  var hasSymbols = confirm("throw some of them curly boys in there"); 
if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(letters);
}
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppers);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (hasSymbols) {
  possibleCharacters = possibleCharacters.concat(symbols);
}

for (var i = 0; i < totalCharacters; i++) {
  var random = Math.floor(Math.random() * possibleCharacters.length);
  console.log(random); 
  newPassword.push(possibleCharacters[random]);
}
return newPassword.join('');

} else {
  console.log("No bueno!");
  alert("hey, enter a better value!"); 
  generatePassword();
}
return "this is not a password"; 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
