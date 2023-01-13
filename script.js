// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //give user prompt asking for password length
  let passLength = prompt("Choose password length: Must be between 8 and 128");
  //validate passLength continue if ok continue if false break
  if (isNaN(passLength) || passLength === null){
    confirm("You must enter a valid number");
    return;
  }
  else if( passLength < 8){
    confirm("Length must be at least 8");
    return;
  }
  else if(passLength > 128){
    confirm("Length must be less than 129");
    return;
  }
 
  //prompt user of character types to use
  var useLower = confirm("Do you want to use lowercase letters");
  var useUpper = confirm("Do you want to use uppercase letters");
  var useNums = confirm("Do you want to use numbers");
  var useSpecial = confirm("Do you want to include special characters");

  //validate at least on character type chosen if not return
  if(!useLower && !useUpper && !useNums && !useSpecial){
    confirm("You must choose at least one character type");
    return;
  }

  var toUseCharArr = [useLower, useUpper, useNums, useSpecial]
  var password = generatePassword(passLength, toUseCharArr);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(length, charsArr) {
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
  var newArr = [];
  //var newArr2 = [];
  var strPassword = "";

  for (var i = 0; i < charsArr.length; i++) {
    if (charsArr[i]) {
      if (i === 0) {
        newArr.push(lowerCaseLetters);
      }
      else if (i === 1) {
        newArr.push(upperCaseLetters)

      }
      else if (i === 2) {
        newArr.push(numbers)
      }
      else if (i === 3) {
        newArr.push(specialChars)
      }
      //console.log(newArr)
    }


  }
  //console.log(newArr)
  for (i = 0; i < length; i++) {
    let newArr2 = [];
    newArr2 = newArr[Math.floor(Math.random() * newArr.length)];
    strPassword = strPassword + newArr2[Math.floor(Math.random() * newArr2.length)];
    console.log(strPassword)
  }
  return strPassword;

}