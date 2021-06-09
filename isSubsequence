//Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

//A subsequence of a string is a new string that is formed from the original string by deleting some 
//(can be none) of the characters without disturbing the relative positions of the remaining characters. 
//(i.e., "ace" is a subsequence of "abcde" while "aec" is not).



let isSubsequence = function(s, t) {
    let seqIndex=0;
    let subIndex=0;
    while(seqIndex<s.length){
        if(subIndex===t.length){
            return false;
        }
        if(s[seqIndex]===t[subIndex]){
            seqIndex++;
        }
        subIndex++;
    }
return true;
};


function isValidSubsequence(array, sequence) {
 let arrIndex = 0;
 let seqIndex = 0;
 while(arrIndex < array.length && seqIndex < sequence.length) {
	 if (array[arrIndex] === sequence[seqIndex]) seqIndex++
	 arrIndex++
}
	return seqIndex === sequence.length

}


