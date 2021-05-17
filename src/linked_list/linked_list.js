const Node = require('./node')

function lengthRecursiveNode(node) {
  if(node == null) {
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

  lengthIterative(ll) {
    var current = this.head
    var length = 0
    while(current) {
      length += 1
      current = current.next
    }
    return length
  }
 
  lengthRecursive(ll) {
    if(this== null) {
      return 0
    } else {
      return lengthRecursiveNode(this.head)
    }
  }

  getNode(n) {
    if(n <= 0 || n>this.lengthIterative()) {
      return null
    }
    else if(n == 1 && this.head) {
      return this.head.data
    }else {
      var current = this.head
      var count = 1
      while(count != n) {
        current = current.next
        count += 1
      }
      return current.data
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
