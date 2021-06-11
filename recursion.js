//countdown while loop

function countDown(x){
  while (x >= 0){
  console.log(x)
  x-- 
  }
}
countDown(10)


//countDown with recursion
function countDown(x){
  //base case
  if(x < 0) return
  console.log(x)
  //recursive case
  countDown(x - 1)
}
countDown(10) 
