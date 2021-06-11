// Find two numbers in a sorted array that sum to a target

let sortedArray = [-3, -1, 1, 3, 5, 6]
let sum = 6

function sumByBruteForce(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
            return true;
            }
        }
    }
    return false;

}

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
