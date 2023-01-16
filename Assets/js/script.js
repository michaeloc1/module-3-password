// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //give user prompt asking for password length
  let passLength = prompt("Choose password length: Must be between 8 and 128 characters");
  //validate passLength continue if ok continue if false return
  if(!validatePassLength(passLength)){
    return;
  }

 
  //prompt user of character types to use
  var useLower = confirm("Do you want to include lowercase letters");
  var useUpper = confirm("Do you want to include uppercase letters");
  var useNums = confirm("Do you want to include numbers");
  var useSpecial = confirm("Do you want to include special characters");

  //validate at least on character type chosen if not return
  if(!useLower && !useUpper && !useNums && !useSpecial){
    confirm("You must choose at least one character type to use");
    return;
  }
  //put character types to use in an array to be passed into generatePassword
  //function along with the passlength the values in the array will be true or false
  var toUseCharArr = [useLower, useUpper, useNums, useSpecial]
  //call generatePassword and return the password string
  var password = generatePassword(passLength, toUseCharArr);
  var passwordText = document.querySelector("#password");
 //add the password to the textarea
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//validate the password is of valid type and length
function validatePassLength(passLength){
  if (isNaN(passLength) || passLength === null){
    confirm("You must enter a valid number");
    return false;
  }
  else if( passLength < 8){
    confirm("Password must be at least 8 characters long");
    return false;
  }
  else if(passLength > 128){
    confirm("Password must be less than 129 characters long");
    return false;
  }
return true;
}


//generates password for user length of password and an array of char types to use
//are passed in
function generatePassword(length, charsArr) {
  //make array of characters for each character type
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
  var newArr = [];
 
  var strPassword = "";
  //loop thru the password array and make an array of arrays of different character
  //types based on user input of which characters to use
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
      
    }


  }
  //loop to make password the proper length
  for (i = 0; i < length; i++) {
    let newArr2 = [];
    //first get a random array from the array of arrays of characters types
    newArr2 = newArr[Math.floor(Math.random() * newArr.length)];
    //then get a random character from the chosen array and add it to strPassword
    strPassword = strPassword + newArr2[Math.floor(Math.random() * newArr2.length)];
   
  }
  
  return strPassword;

}