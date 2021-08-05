/**
In this excercise we will be creating a class for a Binary Search Tree.  This class will allow us to:

1. Insert values iwth the insert method.
2. Search values with the contains method.
3. Remove values with the remove method; this method will only remove the first instance of a given value.

**/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}




/**  Leet Code BST

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

**/
