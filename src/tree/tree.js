function depthRecursively(node, currentNode, currentDepth) {
  if(currentNode == null) return null
  if(node == currentNode) return currentDepth
  return depthRecursively(node, currentNode.left, currentDepth + 1) || depthRecursively(node, currentNode.right, currentDepth + 1)
}

function hasTwoOrZeroChildrenRecursively(currentNode) {
    if(currentNode == null) return true
    if(currentNode.left == null && currentNode.right == null) return true
    if(currentNode.left != null && currentNode.right != null) {
      return (hasTwoOrZeroChildrenRecursively(currentNode.left) && hasTwoOrZeroChildrenRecursively(currentNode.right))
    } else {
      return false
    }
}

class Tree {
  constructor(root) {
    this.root = root
  }

  height() {
    return Tree.heightOfNode(this.root)
  }

  depthOfNode(node) {
    if(node == null) return null
    return depthRecursively(node, this.root, 1)
  }

  isFullyBinaryTree() {
    return hasTwoOrZeroChildrenRecursively(this.root)
  }

  static heightOfNode(node) {
    if(node == null) return 0
    return Math.max(Tree.heightOfNode(node.left), Tree.heightOfNode(node.right)) + 1
  }
  
  static preOrder(node, array = []) {
    if(node == null) return array
    array.push(node.data)
    Tree.preOrder(node.left, array)
    Tree.preOrder(node.right, array)
    return array
  }

  static postOrder(node, array = []) { 
    if(node == null) return array
    Tree.postOrder(node.left, array) 
    Tree.postOrder(node.right, array) 
    array.push(node.data)
    return array
  }  

  static inOrder(node, array = []) {
    if(node == null) return array
    Tree.inOrder(node.left, array)
    array.push(node.data)
    Tree.inOrder(node.right, array)
    return array
  }
}

module.exports = Tree
