/**

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

**/

var findShortestSubArray = function(nums) {
    if(nums.length === 1) return 1
    let memo = {}
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i]
        number in memo ? memo[number].push(i) : memo[number] = [i]
    }
    let smallestSubArrayDiff = Infinity
    let highestFrequency = 0 
    for(let number in memo) {
        let indexArr = memo[number]
        if(indexArr.length > 1) {
            let smallestIdx = Math.min(...indexArr)
            let largestIdx = Math.max(...indexArr)
            let currentDifference = largestIdx - smallestIdx
            if(indexArr.length > highestFrequency) {
                highestFrequency = indexArr.length
                smallestSubArrayDiff = currentDifference
            } else if (indexArr.length === highestFrequency) {
                smallestSubArrayDiff = Math.min(smallestSubArrayDiff, currentDifference)
            }
            }
    }
    if(smallestSubArrayDiff === Infinity) {
        return 1
    } else {
        return smallestSubArrayDiff +=1
    }
};
