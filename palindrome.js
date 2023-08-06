function isPalindrome(word) {
    word = word.toLowerCase();  // Convert the word to lowercase for case-insensitive comparison
    let left = 0;
    let right = word.length - 1;
    
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Test cases
const word1 = "gag";
const word2 = "kayak";
const word3 = "php";
const word4 = "radar";
const word5 = "hello";

console.log(isPalindrome(word1));  // Output: true
console.log(isPalindrome(word2));  // Output: true
console.log(isPalindrome(word3));  // Output: true
console.log(isPalindrome(word4));  // Output: true
console.log(isPalindrome(word5));  // Output: false
