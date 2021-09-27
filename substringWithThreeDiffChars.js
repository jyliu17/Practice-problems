/**

A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
 

Constraints:

1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.

**/

/** O(n) solution **/

var countGoodSubstrings = function(s) {
    const len = s.length

    if (len < 3)    return 0
    
    
    let result = 0
    for (let i = 2; i < len; i++) {
        const a = s[i - 2]
        const b = s[i - 1]
        const c = s[i]
        if (a !== b && b !== c && c !== a)
            result++
    }
    
    
    return result
};


/** Sliding window solution **/

var countGoodSubstrings = function(s) {
    let counter = 0;
    let duplicateCount = 0;
    const charToCount = {};
    let start = 0;
    let size = 0;
    
    for (let i = 0; i < s.length; i++) {
        charToCount[s[i]] = (charToCount[s[i]] || 0) + 1;
        size++;
        if (charToCount[s[i]] === 2) {
            duplicateCount++;
        }
        
        while (size > 3 || duplicateCount > 0) {
            if (--charToCount[s[start]] === 1) {
                duplicateCount--;
            }
            start++;
            size--;
        }
        
        if (size === 3) {
            counter++;
        }
    }
    
    return counter;
};

