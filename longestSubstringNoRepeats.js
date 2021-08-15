/**
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

**/

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0)
        return 0;
    let prevStr = "";
    let sum = 0, highest = 0;
    for(const c of s) {
        if (prevStr.includes(c)) {
            let index = prevStr.indexOf(c);
            prevStr = prevStr.substring(index+1);
        }
        
        prevStr += c;
        sum = prevStr.length;
        
        if (sum > highest)
            highest = sum
    }
    return highest;
};
