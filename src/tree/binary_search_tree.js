const Tree = require('./tree')
const Node = require('./node')

function insertRecursively(node, data) {
  if(data <= node.data) {
    if(!node.left) {
      node.left = new Node(data)
    } else {
      insertRecursively(node.left, data)
    }
  } else {
    if(!node.right) {
      node.right = new Node(data)
    } else {
      insertRecursively(node.right, data)
    }
  }
}

function searchRecursively(node, data) {
  if(node == null) return false
  if(data == node.data) return true
  if(data < node.data) {
    return searchRecursively(node.left, data)
  } else {
    return searchRecursively(node.right, data)
  }

}

class BinarySearchTree extends Tree {
  insert(data) {
    if(this.isEmpty()) {
      this.root = new Node(data)
    } else {
      insertRecursively(this.root, data)
    }
  }

  search(data) {
    if(this.isEmpty()) return false
    return searchRecursively(this.root, data)
  }
}

module.exports = BinarySearchTree
