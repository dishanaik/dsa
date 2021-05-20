var assert = require('assert')
var LinkedList = require('../../src/linked_list/linked_list')
var Node = require('../../src/linked_list/node')
describe('LinkedList', function() {
  var ll = null

  beforeEach(function() {
    ll = new LinkedList()
  });

  describe('#insertAtTheBegining', function() {
    describe('when empty', function() {
      it('should insert the value', function() {
        ll.insertAtTheBegining(10)
        assert.strictEqual(ll.head, ll.tail)
        assert.notStrictEqual(ll.head, null)
        assert.notStrictEqual(ll.tail, null)
        assert.strictEqual(ll.head.data, 10)
        assert.strictEqual(ll.tail.data, 10)
      })
    })

    describe('when one element is present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(10)
      })

      it('should insert the value at the beginning', function() {
        ll.insertAtTheBegining(20)
        assert.notStrictEqual(ll.head, ll.tail)
        assert.notStrictEqual(ll.head, null)
        assert.notStrictEqual(ll.tail, null)
        assert.strictEqual(ll.head.data, 20)
        assert.strictEqual(ll.tail.data, 10)
      })
    })

    describe('when multiple element are present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(10)
        ll.insertAtTheBegining(20)
        ll.insertAtTheBegining(30)
      })

      it('should insert the value at the beginning', function() {
        ll.insertAtTheBegining(40)
        assert.notStrictEqual(ll.head, ll.tail)
        assert.notStrictEqual(ll.head, null)
        assert.notStrictEqual(ll.tail, null)
        assert.strictEqual(ll.head.data, 40)
        assert.strictEqual(ll.getNode(1).data, 30)
      })
    })
  })

  describe('#insertAfter', function() {
    describe('when empty', function() {
      it('should not insert', function() {
        ll.insertAfter(new Node(50), 60)
        assert.strictEqual(ll.head, null)
        assert.strictEqual(ll.tail, null)
      })
    })
    describe('when one element is present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(10)
      })

      it('should insert the value', function() {
        ll.insertAfter(ll.head, 20)
        assert.strictEqual(ll.head.data, 10)
        assert.strictEqual(ll.getNode(1).data, 20)
        assert.strictEqual(ll.tail.data, 20)
        assert.strictEqual(ll.tail.next, undefined)
        assert.notStrictEqual(ll.head, ll.tail)
      })
    })
    describe('when multiple elements are present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(10)
        ll.insertAtTheBegining(20)
        ll.insertAtTheBegining(30)
      })

      it('should insert the value', function() {
        ll.insertAfter(ll.head.next, 40)
        assert.strictEqual(ll.getNode(2).data, 40)
        assert.strictEqual(ll.getNode(1).data, 20)
        assert.strictEqual(ll.getNode(3).data, 10)
      })

      it('should insert the value when inserting after tail', function() {
        ll.insertAfter(ll.tail, 40)
        assert.strictEqual(ll.tail.data, 40)
        assert.strictEqual(ll.tail.next, undefined)
      })
    })
  })

  describe('#insertAtTheEnd', function() {
    describe('when empty', function() {
      it('should insert the value', function() {
        ll.insertAtTheEnd(50)
        assert.strictEqual(ll.head.data, 50)
        assert.strictEqual(ll.tail, ll.head)
      })
    })
    describe('when 1 element is present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(90)
      })
      it('should insert after that element', function() {
        ll.insertAtTheEnd(100)
        assert.strictEqual(ll.getNode(1).data, 100)
        assert.strictEqual(ll.tail.data, 100)
      })
    })
    describe('when multiple elements are present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(8)
        ll.insertAtTheBegining(88)
      })
      it('should insert after that element', function() {
        ll.insertAtTheEnd(888)
        assert.strictEqual(ll.getNode(2).data, 888)
        assert.strictEqual(ll.tail.data, 888)
      })
    })
  })
  describe('#lengthIterative', function() {
    describe('when empty', function() {
      it('should return 0', function() {
        assert.strictEqual(ll.lengthIterative(), 0)
      })
    })
    describe('when not empty', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(10)
        ll.insertAtTheBegining(20)
        ll.insertAtTheBegining(30)
        ll.insertAtTheBegining(40)
      })
      it('should return no. of nodes', function() {
        assert.strictEqual( ll.lengthIterative(), 4)
      })
    })
  })

  describe('#lengthRecursive', function() {
    describe('when empty', function() {
      it('should return 0', function() {
        assert.strictEqual(ll.lengthRecursive(), 0)
      })
    })
    describe('when not empty', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(10)
        ll.insertAtTheBegining(20)
        ll.insertAtTheBegining(30)
        ll.insertAtTheBegining(40)
      })
      it('should return no. of nodes', function() {
        assert.strictEqual(ll.lengthRecursive(), 4)
      })
    })
  })

  describe('#getNode', function() {
    describe('when n is less than 0', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(4)
      })
      it('should return null', function() {
        assert.strictEqual(ll.getNode(-1), null)
      })
    })
    describe('when n is 0  when LL is not empty', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(6)
      })
      it('should return head node', function() {
        assert.strictEqual(ll.getNode(0), ll.head)
      })
    })
    describe('when n is 0  when LL is empty', function() {
      it('should return null', function() {
        assert.strictEqual(ll.getNode(0), null)
      })
    })
    
    describe('when more than 1 nodes are present', function() {
      beforeEach(function() {
        ll.insertAtTheBegining(100)
        ll.insertAtTheBegining(200)
        ll.insertAtTheBegining(300)
        ll.insertAtTheBegining(400)
      })
      it('should return the nth node', function() {
        assert.strictEqual(ll.getNode(3), ll.head.next.next.next)
      } )
      it('should return null if n is greater than length of LL', function() {
        assert.strictEqual(ll.getNode(5), null)
      })
    })
    
  })

})
