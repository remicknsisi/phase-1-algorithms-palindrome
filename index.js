function isPalindrome(word) {
  let backwardsWord = word.split('').reverse().join('')

  if (word === backwardsWord){
    return true
  } else {
    return false
  }
}

/* 

  create function named 'isPalindrome' whose argument = string

  break that string out into its individual letters and assort them in an array
    reverse that array and join the letters

  use if / else statement to determine the return value of the function 
    if the new value is equal to the value passed in, return true. if not, return false.

*/

/*

  The function isPalindrome takes in a string. I create a variable to define the backwards version of the input. I do this by splitting the string to parse it into an array of letters, then use the array reverse() method to change the order. Finally, I join the array elements to create a new string. I then use an if / else statement to check if the backwards version matches the value passed in. If it does, the function returns true. If it does not, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"))
}

module.exports = isPalindrome;
