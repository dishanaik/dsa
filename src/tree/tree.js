class Tree {
  constructor(root) {
    this.root = root
  }

  static pre_order(node, array = []) {
    if(node == null) return array
    array.push(node.data)
    Tree.pre_order(node.left, array)
    Tree.pre_order(node.right, array)
    return array
  }

  static post_order(node, array = []) { 
    if(node == null) return array
    Tree.post_order(node.left, array) 
    Tree.post_order(node.right, array) 
    array.push(node.data)
    return array
  }  

  static in_order(node, array = []) {
    if(node == null) return array
    Tree.in_order(node.left, array)
    array.push(node.data)
    Tree.in_order(node.right, array)
    return array
  }
}

module.exports = Tree
