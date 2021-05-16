class Tree {
  constructor(root) {
    this.root = root
  }

  static pre_order(node, array = []) {
    if(node == null) return array
    Tree.pre_order(node.left, array)
    Tree.pre_order(node.right, array)
    array.push(node.data)
    return array
  }

  static post_order(node) { 
    if(node == null) {
      return
    } else {
      post_order(node.left) 
      post_order(node.right) 
      console.log(node.data)
    }
  }  
}

module.exports = Tree
