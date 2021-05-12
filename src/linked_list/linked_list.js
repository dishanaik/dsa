const Node = require('./node')

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
