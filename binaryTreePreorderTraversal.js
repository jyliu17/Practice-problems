/** Given the root of a binary tree, return the preorder traversal of its nodes' values.

 
Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
**/

/** Iterative:
The approach for an iterative solution:
Iterative is more complicated than recursive. The key is to use a stack to store nodes whose values haven’t been pushed yet. So for pre-order traversal, we only need to store right values on the stack, because left values can be immediately pushed to result.

Result, Stack = [ ]
Node = root
While node is not null OR stack is not empty (this lets our loop end when we remove the final node from the stack, which would be our last ‘right-hand’ node)
If node is null, pop a node from the stack and assign that to node (aka, get right sibling)
Result.push node.value
Node = node.left

**/ 

var preorderTraversal = function(root) {
    const result = [];
  
    const stack = [];
    let node = root;
    while (node !== null || stack.length !== 0) {
      if (node === null) {
        node = stack.pop(); 
      }
      result.push(node.val);
      if (node.right) {
        stack.push(node.right);
      }
      node = node.left;
    }
    
    return result;
};

/**
Recursive
The approach for a recursive solution:

Result = []
Node = root
Base case: node === null
Push node.val to result
For each child [left, right], recurse on that child
**/

var preorderTraversal = function(root) {
    const result = [];
    
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      
      result.push(node.val);
      
      [node.left, node.right].forEach(child => {
        traverse(child)
      });
    };
  
    traverse(root);
	
	return result;
};
