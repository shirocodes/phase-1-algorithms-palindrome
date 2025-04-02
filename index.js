function isPalindrome(word) {
  // Write your algorithm here
  //a function that returns true or false depending on string's palindrome state
  //should be case sensitive 
  //need a variable to define if palindrome or not

  let newWord = word.split("").reverse().join("")

  if(word === newWord) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(word)
  
  let testIftrue = word >>change somethings
  if (word === testIfTrue) true  
  else {false}


*/

/*
  Add written explanation of your solution here
defining a variable that includes split() reverse(), and join() helps
to make the word be readable or not readable upside down
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("trolley"))
  console.log(isPalindrome("madam"))
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
