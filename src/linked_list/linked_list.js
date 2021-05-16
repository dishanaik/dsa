const Node = require('./node')

function lengthRecursiveNode(node) {
  if(node == null) {
    console.log("_____________________________________________",node)
    return 0
  } else {
    return 1 + lengthRecursiveNode(node.next)
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  isEmpty() {
    return this.head == null
  }

  insertAtTheBegining(val) {
    var newNode = new Node(val)
    if(this.isEmpty()) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
  }

  insertAtTheEnd(val) {
    var newNode = new Node(val)
    if(this.isEmpty()) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  static lengthIterative(ll) {
    var current = ll.head
    var length = 0
    while(current) {
      length += 1
      current = current.next
    }
    return length
  }
 
  static lengthRecursive(ll) {
    if(ll == null) {
      return 0
    } else {
      return lengthRecursiveNode(ll.head)
    }
  }


  insertAfter(node, val) {
    if(this.isEmpty()) return
    var newNode = new Node(val)
    if(node == this.tail) {
      this.tail = newNode
    } else {
      newNode.next = node.next
    }
    node.next = newNode
  }
}

module.exports = LinkedList
