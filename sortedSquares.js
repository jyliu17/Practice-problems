
//O(nlogn)

function sortedSquare(arr){
    squaredArray = arr.map(num => num * num)

    return squareArray.sort((a,b) => a-b)
}

//O(n)
function sortedSquares(nums) {
   
    let left = 0;
    let right = nums.length-1;
    let arr = new Array(right+1)
    for(let i=nums.length-1; i>=0; i--){
        let l = nums[left] ** 2;
        let r = nums[right] **2;
        if(l>=r){
            arr[i] = l
            left++;
        }else{
            arr[i] = r
            right--
        }
    }
    return arr

};
    return output;
}
