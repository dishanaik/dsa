var assert = require('assert')
const { beforeEach } = require('mocha')
var MinStack = require('../../src/stack/min_stack')

describe('MinStack', function() {
  var stack = null
  beforeEach(function() {
    stack = new MinStack()
  })
  describe('#push', function() {

    describe('when stack is full', function() {
      beforeEach(function() {
        stack.a = [1, 2, 3, 4, 5]
        stack.i = 5
        stack.size = 5
      })
      it('should not store the value', function() {
        stack.push(7)
        assert.strictEqual(stack.peek(), 5)
      })
    })
    describe('when stack is empty', function() {
      it('should store the value', function() {
        stack.push(7)
        assert.strictEqual(stack.peek(), 7)
      })
    })

    describe('when 1 element is present', function() {
      beforeEach(function() {
        stack.push(7)
      })
      it('should store the smallest number on top', function() {
        stack.push(10)
        assert.strictEqual(stack.peek(), 7)
      })
    })

    describe('when multiple elements are present', function() {
      beforeEach(function() {
        stack.push(7)
        stack.push(10)
      })
      it('should store the smallest number on top', function() {
        stack.push(30)
        assert.strictEqual(stack.i, 3)
        assert.strictEqual(stack.peek(), 7)
        assert.strictEqual(stack.a[0], 30)
      })
    })
  })
})
