/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  const str1Arr = str1.toLowerCase().split('').sort();
  const str2Arr = str2.toLowerCase().split('').sort();

  for (let i = 0; i < str1Arr.length; i++) {
    console.log(str1Arr[i], str2Arr[i]);
    if (str1Arr[i] !== str2Arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram;
