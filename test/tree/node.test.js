const {strictEqual, deepStrictEqual} = require('assert')

const Node = require('../../src/tree/node')
const Tree = require('../../src/tree/tree')

describe('Tree', function() {
  describe('#pre_order', function() {
    it('should have a function called pre_order', function() {
      strictEqual(typeof Tree.pre_order, 'function')
    })

    it('should return empty array for empty tree', function() {
      deepStrictEqual(Tree.pre_order(new Tree().root), [])
    })

    describe('when only 1 node is present', function() {
      it('should return 10 data when root node is 10', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(10)).root), [10])
      })
  
      it('should return 11 data when root node is 11', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(11)).root), [11])
      })
    })

    describe('when 2 nodes are present ', function() {
      it('should return pre-order of left node and root node', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(11, new Node(2))).root), [2,11])
      })
      it('should return pre-order of right node and root node', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(11, null, new Node(2))).root), [2,11])
      })
    })

    describe('when skewed left tree with three nodes is present', function() {
      it('should return pre-order of 3 nodes', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(1, new Node(2, new Node(3)))).root), [3, 2, 1])
      })
    })

    describe('when skewed right tree with three nodes is present', function() {
      it('should return pre-order of 3 nodes', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(1, null, new Node(2, null, new Node(8)))).root), [8, 2, 1])
      })
    })

    describe('when nested tree is present', function() {
      it('should return pre-order of the three', function() {
        deepStrictEqual(Tree.pre_order(new Tree(new Node(5, null,new Node(2, new Node(3), new Node(10)))).root), [3, 10, 2, 5])
      })
    })
  })
})
