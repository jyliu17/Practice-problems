
/**
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
**/

var maxSubArray = function(nums) {
    //initialize variable
    maxSum=Number.MIN_SAFE_INTEGER  //max 
    currSum=Number.MIN_SAFE_INTEGER // running sum
    startIndex=endIndex=0 // index to be found for subarray
    for(let i in nums){
      // as running sum is <=0 start the new array
      if(currSum <= 0 ){
            //set running sum to current element 
            currSum = nums[i]
            //get a new start index
            new_start = i
        }else{
          //otherwise continue adding
            currSum+= nums[i] 
        }
        // get the new max if running sum > old max
       if(maxSum < currSum){
            maxSum=currSum
            // set startindex to new start as got above 
            startIndex=new_start
            //as i incremented continuos ,set end idex to i
            endIndex = parseInt(i) + 1 //index exclusive
      }

    }
    console.log(`Max subArray start index ${startIndex} and end index(exclusive) ${endIndex} having max sum ${maxSum} !`)

    console.log(`Max Subarray = [${nums.slice(startIndex,endIndex)}]`)

    return maxSum
};

// driver code 
console.log(maxSubArray([-1,1]))
