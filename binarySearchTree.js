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
