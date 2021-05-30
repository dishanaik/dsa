const BinarySearchTree = require('../../src/tree/binary_search_tree')
const Node = require('../../src/tree/node')
const assert = require('assert')

describe('Binary Search Tree', function() {
  let bsTree = null
  beforeEach(function() {
    bsTree = new BinarySearchTree()
  })
  describe('#insert', function() {
    describe('when empty', function() {
      it('should be inserted as root of the tree', function() {
        bsTree.insert(5)
        assert.strictEqual(bsTree.root.data, 5)
      })
    })

    describe('when 1 node is present', function() {
      beforeEach(function() {
        bsTree.root = new Node(6)
      })
      it('should inserted at left if lesser than root', function() {
        bsTree.insert(3)
        assert.strictEqual(bsTree.root.left.data, 3)
      })

      it('should inserted at right if greater than root', function() {
        bsTree.insert(10)
        assert.strictEqual(bsTree.root.right.data, 10)
      })
    })

    describe('when left subtree is not present', function() {
      beforeEach(function() {
        bsTree.root = new Node(5, null, new Node(10))
      })
      
      it('should be the left child of node 10', function() {
        bsTree.insert(9)
        assert.strictEqual(bsTree.root.right.left.data, 9)
      })

      it('should be the right child of node 10', function() {
        bsTree.insert(12)
        assert.strictEqual(bsTree.root.right.right.data, 12)
      })
    })

    describe('when right subtree is not present', function() {
      beforeEach(function() {
        bsTree.root = new Node(5, new Node(1))
      })
      
      it('should be the left child of node 1', function() {
        bsTree.insert(3)
        assert.strictEqual(bsTree.root.left.right.data, 3)
      })

      it('should be the right child of node 1', function() {
        bsTree.insert(0)
        assert.strictEqual(bsTree.root.left.left.data, 0)
      })
    })
    
  })

  describe('#search', function() {
    describe('when empty', function() {
      it('should return false', function() {
        assert.strictEqual(bsTree.search(7), false)
      })
    })

    describe('when 1 node is present', function() {
      beforeEach(function() {
        bsTree.root = new Node(8)
      })
      it('should return false ', function() {
        assert.strictEqual(bsTree.search(7), false)
      })

      it('should return true ', function() {
        assert.strictEqual(bsTree.search(8), true)
      })
    })

    describe('when 1 node is present', function() {
      beforeEach(function() {
        bsTree.root = new Node(8)
      })
      it('should return false ', function() {
        assert.strictEqual(bsTree.search(7), false)
      })

      it('should return true ', function() {
        assert.strictEqual(bsTree.search(8), true)
      })
    })

    describe('when left subtree is not present', function() {
      beforeEach(function() {
        bsTree.root = new Node(5, null, new Node(10))
      })
      it('should return true', function() {
        assert.strictEqual(bsTree.search(10), true)
      })

      it('should return false', function() {
        assert.strictEqual(bsTree.search(12), false)
      })
    })

    describe('when right subtree is not present', function() {
      beforeEach(function() {
        bsTree.root = new Node(5, new Node(1))
      })
      it('should return true', function() {
        assert.strictEqual(bsTree.search(1), true)
      })

      it('should return false', function() {
        assert.strictEqual(bsTree.search(12), false)
      })
    })

    describe('when both subtrees are present', function() {
      beforeEach(function() {
        bsTree.root = new Node(5, new Node(1), new Node(90))
      })
      
      it('should return true', function() {
        assert.strictEqual(bsTree.search(1), true)
      })

      it('should return true', function() {
        assert.strictEqual(bsTree.search(90), true)
      })

      it('should return false', function() {
        assert.strictEqual(bsTree.search(12), false)
      })
    })
  })
})

