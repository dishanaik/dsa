const Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head==null
  }

  insertAtTheBegining(val) {
    if(this.isEmpty()) {
      this.head = new Node(val)
      this.tail = this.head
    } else {
      var newNode = new Node(val)
      newNode.next = this.head
      this.head = newNode
    }
  }

  insertAtTheEnd(val) {
    if(this.isEmpty()) {
      this.head = new Node(val)
      this.tail = this.head
    } else {
      var newNode = new Node(val)
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  insertAfter(node, val) {
    if(this.isEmpty()) return
    if(node == this.tail) {
      var newNode = new Node(val)
      node.next = newNode
      this.tail = newNode
    } else {
      var newNode = new Node(val)
      newNode.next = node.next
      node.next = newNode
    }
  }
}

module.exports = LinkedList
