
/** Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.


Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
**/

/** two pointers
time O(len n)
space O(1)
**/

var isPalindrome = function(x) {
    
    if (x < 0) {
        return false;
    }
    
    if ( x % 10 === 0 && x !== 0) {
        return false
    }
    
    
    const str = String(x)
    let left = 0
    let right = str.length - 1
    
    while (left < right) {
        if (str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    
    return true;
};

/** string reversal
time O(len n)
space O(1)
**/

var isPalindrome = function(x) {
    
return x == x.toString().split('').reverse().join('')
    
};

