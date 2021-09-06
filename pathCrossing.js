/***  

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

 

Example 1:


Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.
Example 2:


Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.

***/


var isPathCrossing = function(path) {
  const set = new Set();
  
  // Initial coordinates
  let x = 0;
  let y = 0;
  
  // Adding initial coordinates to the set. The comma works as a separator over here
  set.add(`${x},${y}`);
  
  // Loop over the entire path
  for (let i = 0; i < path.length; i += 1) { 
  
    // Mutate coordinates based on the direction
    if (path[i] === "N") y += 1;
    else if (path[i] === "E") x += 1;
    else if (path[i] === "S") y -= 1;
    else x -= 1;
    
	// Early return if coordinate already exists
    if (set.has(`${x},${y}`)) return true;
	
	// Add newly visited coordinate to the set
    set.add(`${x},${y}`);
  }
  
  // Path did not cross itself at any point
  return false;
};
