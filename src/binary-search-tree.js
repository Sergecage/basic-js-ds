const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodes = null;
  }

  root() {
    return this.nodes;
    
  }

  add(data) {
    const childNode = this.nodes;
    if (childNode === null) {
      this.rt = new Node(data);
      return
    } else {
      const searchNode = childNode => {
        if (data < childNode.data) {
          if (childNode.left === null) {
            childNode.left = new Node(data);
            return
          } else {
            return searchNode(childNode.left);
          }
        } else if (data > childNode.data){
          if (childNode.right === null) {
            childNode.right = new Node(data);
            return
          } else {
            return searchNode(childNode.right);
          } 
        }
      }
      return searchNode(childNode);
    }
  }

  has(data) {
    let childNode = this.nodes;
    while (childNode !== null) {
      if ( childNode.data === data) {
        return true
      } else if (data < childNode.data) {
        childNode = childNode.left;
      } else {
        childNode = childNode.right;
      }
    }
    return false;
  }

  find(data) {
    let childNode = this.nodes;
    while (childNode !== null) {
      if (childNode.data === data) {
        return childNode;
      } else if (data < childNode.data) {
        childNode = childNode.left;
      } else {
        childNode = childNode.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (child, data) => {
      if (data === child.data) {
        if (child.left === null && child.right === null) {
          return null;
        }
        if (child.left === null) {
          return child.right;
        }
        if ( child.right === null) {
          return child.left;
        }
        let tempNode = child.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        child.data = tempNode.data;
        child.right = removeNode(child.right, tempNode.data);
        return child;
      } else if ( data > child.data) {
        child.right = removeNode(child.right, data);
        return child;
      } else {
        child.left = removeNode(child.left, data);
        return node;
      }
    }
    this.nodes = removeNode(this.node, data);
  }

  min() {
    let childNode = this.nodes;
    while (childNode.left !== null) {
      childNode = childNode.left;
    }
    return childNode.data;
  }

  max() {
    let childNode = this.nodes;
    while (childNode.right !== null) {
      childNode =childNode.right;
    }
    return childNode.data;
  }
}

module.exports = {
  BinarySearchTree
};