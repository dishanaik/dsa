var assert = require('assert')
var Stack = require('../../src/stack/stack')

describe('Stack', function() {
  var stack = null
  beforeEach(function() {
    stack = new Stack()
  })
  describe('#isEmpty', function() {
    describe('when empty', function() {
      
      it('should return true', function() {
        assert.strictEqual(stack.isEmpty(), true)
        assert.strictEqual(stack.i, 0)
      })
    })
    describe('when not empty', function() {
      beforeEach(function() {
        stack.push(5)
      })
      it('should return false', function() {
        assert.strictEqual(stack.isEmpty(), false)
        assert.notStrictEqual(stack.i, 0)
      })
    })
  })
  describe('#peek',function(){
    describe('when empty', function() {
      it('should not return anything', function() {
        stack.peek()
        assert.strictEqual(stack.peek(), undefined)
      })
    })
    describe('when elements are present', function() {
      beforeEach(function() {
        stack.push(10)
        stack.push(20)
        stack.push(30)

      })
      it('should return recently pushed value', function() {
        stack.peek()
        assert.strictEqual(stack.peek(), 30)
      })
    })
  })

  describe('#push', function() {
    describe('when full', function() {
      beforeEach(function() {
        stack.size = 5
        stack.i = 5
        stack.arr = [1, 2, 3, 4, 5]
      })
      it('should not push the value', function() {
        stack.push(7)
        assert.notStrictEqual(stack.peek(), 7)
      })
    })
    describe('when empty', function(){
      it('should insert value', function() {
        stack.push(10)
        assert.strictEqual(stack.peek(), 10)
        assert.strictEqual(stack.i,1)
      })
    })
  })

  describe('#pop', function(){
    describe('when empty',function(){
      it('should not return anything', function() {
        stack.pop()
        assert.strictEqual(stack.peek(), undefined)

      })
    })

    describe('when elements are present', function(){
      beforeEach(function() {
        stack.push(10)
        stack.push(20)
        stack.push(30)
      })
      it('should remove the value', function(){
        stack.pop()
        assert.strictEqual(stack.a[stack.i], 30)
      })
    })
  })
})
