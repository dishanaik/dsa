function lengthRecursiveNode(node) {
  if(node == null) {
    return 0
  } else {
    return 1 + lengthRecursiveNode(node.next)
  }
}

module.exports = {lengthRecursiveNode}
