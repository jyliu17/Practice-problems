
function binarySearch(array, target) {
  // Write your code here.
	let left = 0
	let right = array.length - 1;
	
	while (left <= right) {
		let m = Math.floor((left + right)/2)
		if (target === array[m]) {
			return m
		} else if (target < array[m]) {
			right = m - 1
		} else {
			left = m + 1
		}
	} return -1
}
