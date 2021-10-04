// Find two numbers in a sorted array that sum to a target

let sortedArray = [-3, -1, 1, 3, 5, 6]
let sum = 6

function sumByBruteForce(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
            return [array[i] , array[j]];
            }
        }
    }
    return false;

}


/** Two Pointer **/

function sumByTwoPointers(array, sum) {
    left = 0
    right = array.length - 1
    while (left < right) {
        current = array[left] + array[right]
        if (sum = current) {
            return (left + 1, right + 1)
        } else if (sum < current) {
            right--
        } else {
            left++
        }
    } 
}

/** Hashmap/Map **/

var twoSum = function(nums, target) {
    
  const sum = new Map()
  
  for (let i = 0; i < nums.length; i++){
      
      let diff = target - nums[i]

      
      if(!sum.has(diff) ){
          sum.set(nums[i], i)
      } else {
          let index = sum.get(diff)
          return [index, i]
      }
  }
    
};
