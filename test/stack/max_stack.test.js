var assert = require('assert')
var MaxStack = require('../../src/stack/max_stack')

describe('MaxStack', function() {
  var stack = null
  beforeEach(function() {
    stack = new MaxStack()
  })


  describe('#push', function() {
    it('should have function called push', function() {
      assert.strictEqual(typeof stack.push, 'function')
    })
    describe('when stack is empty', function() {
      it('should store the value when pushed', function() {
        stack.push(5)
        assert.strictEqual(stack.peek(), 5)
      })
    })
  
    describe('when stack has 1 element', function() {
      beforeEach(function() {
        stack.push(5)
      })
      it('should always keep the greatest element on the top', function() {
        stack.push(4)
        assert.strictEqual(stack.i, 2)
        assert.strictEqual(stack.peek(), 5)
      })
    })

    describe('when stack has multiple elements ', function() {
      beforeEach(function() {
        stack.push(5)
        stack.push(4)
      })
      describe('when value is lesser than both elements', function() {
        it('should store at the bottom of the stack', function() {
          stack.push(1)
          assert.strictEqual(stack.i, 3)
          assert.strictEqual(stack.a[0], 1)
          assert.strictEqual(stack.peek(), 5)
        })
      })
      describe('when value is greater than both elements', function() {
        it('should store at the top of the stack', function() {
          stack.push(10)
          assert.strictEqual(stack.i, 3)
          assert.strictEqual(stack.peek(), 10)
        })
      })
      describe('when value is in between the both elements', function() {
        it('should store in the middle of the elements', function() {
          stack.push(4.5)
          assert.strictEqual(stack.i, 3)
          assert.strictEqual(stack.a[1], 4.5)
        })
      })
    })

    describe('when stack is full', function() {
      beforeEach(function() {
        stack.a = [1,2,3,4,5]
        stack.i = 5
      })
      it('should not push', function() {
        stack.push(10)
        assert.strictEqual(stack.i, 5)
        assert.strictEqual(stack.peek(), 5)
      })
    })
  })
})
