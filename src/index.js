module.exports = {}

class Number {
  constructor(value) {
    this.value = value
  }

  increment() {
    this.value = this.value + 1
  }

  decrement() {
    this.value = this.value - 1
  }

  static isNumber(data) {
    return parseInt(data) === data
  }
}

let number = new Number(10)
number.decrement()
console.log(number)
