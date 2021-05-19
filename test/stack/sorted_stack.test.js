var assert = require('assert')
var SortedStack = require('../../src/stack/sorted_stack')

describe('SortedStack', function() {
  var stack = null
  beforeEach(function() {
    stack = new SortedStack()
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
    
  })

  describe('#pop', function() {
  })
})
