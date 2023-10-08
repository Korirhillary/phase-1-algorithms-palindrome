function isPalindrome(word) {
  let polishedString = word;
  let reversedString = polishedString.split("").reverse().join("");
    console.log(polishedString,reversedString);
    if (reversedString === polishedString) {
     return true; }
     if (polishedString != reversedString) {
     return false;
}
 }

/* initialize empty array called result
divides the original string argument into array of its elements
revese the sequence and compare with each item in the input array:
  if element is a number:
    push item onto result
    
  the function divides the original string argument into array of its elements
  it then reverses the second array and joins the elements to form a second string
  it finally tests whether the second string is an exact copy of the original string
*/
if (require.main === module) {
  console.log("momononomom");// my own custom test
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  return;
}

module.exports = isPalindrome;