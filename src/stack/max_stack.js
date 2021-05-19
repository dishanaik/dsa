const Stack = require('./stack')

class MaxStack extends Stack {
  push(val) {
    if(this.isFull()) return null
    if(this.isEmpty()) {   
      this.a[this.i++] = val
    } else {
      if(val > this.peek()) {
        this.a[this.i++] = val
      } else {
        let temp = this.pop()
        this.push(val)
        this.a[this.i++] = temp
      }
    }
  }
}

module.exports = MaxStack
