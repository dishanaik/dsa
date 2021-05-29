const Stack = require('./stack')

class MinStack extends Stack {
  push(val) {
    if(this.isFull()) return
    if(this.isEmpty() || val < this.peek()) {
      this.a[this.i++] = val
    } else {
      let temp = this.pop()
      this.push(val)
      this.a[this.i++] = temp
    }
  }
}

module.exports = MinStack
