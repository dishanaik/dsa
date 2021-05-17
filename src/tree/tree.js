class Tree {
  constructor(root) {
    this.root = root
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
