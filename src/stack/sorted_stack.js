class SortedStack {
  constructor() {
    this.a = []
    this.i = 0
    this.size = 5
  }

  isEmpty() {
    return this.i == 0
  }

  isFull() {
    return this.size == this.i
  }

  push(val) {
    
  }

  pop() {
  }

  peek() {
    if (this.isEmpty()) {
      return
    } else {
      return this.a[this.i - 1]
    }
  }
}

module.exports = SortedStack
