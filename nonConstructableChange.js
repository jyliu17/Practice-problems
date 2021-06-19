//Given an array of positive integers (representing coins), find the smallest value that cannot be constructed from those integers.

function nonConstructibleChange(coins) {
  // Write your code here.
	coins.sort((a,b) => a-b);
	
	let currentChange = 0
	for (const coin of coins) {
		if (coin > currentChange +1) return currentChange + 1
		
		currentChange += coin
	}
  return currentChange + 1;
}
