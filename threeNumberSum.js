/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
**/

O(n^2)

function threeSum(nums)
    nums.sort((a, b) => a - b);
    const result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let low = i+1, high = nums.length-1, sum = 0;
        
        while(low < high) {
            sum = nums[i] + nums[low] + nums[high];
            
            if(sum === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                while(nums[low+1] === nums[low]) low++;
                while(nums[high-1] === nums[high]) high--;
                low++;
                high--;
            } else if(sum < 0) low++;
            else high--;
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return result;    

//algo expert solution

function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a-b);
	
	const result = [];
	for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
	let right = array.length - 1;
        
        while(left < right) {
            const currentSum = array[i] + array[left] + array[right];
            
            if(currentSum === targetSum) {
                result.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if(currentSum < targetSum) {
		left++;
	    } else if(currentSum > targetSum) {
		right--;
	    }
        }
    }
    return result;    
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
