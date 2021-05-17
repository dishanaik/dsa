const Node = require('./node')
const {lengthRecursiveNode} = require('./utils')

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

  lengthIterative() {
    var length = 0
    var current = this.head
    
    while(current) {
      length += 1
      current = current.next
    }
    
    return length
  }
 
  lengthRecursive() {
    return lengthRecursiveNode(this.head)
  }

  getNode(n) {
    if(n <= 0) return null
    
    var count = 1
    var current = this.head
    while(count != n && current.next != null) {
      current = current.next
      count += 1
    }
    
    return count == n && current ? current.data : null
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
