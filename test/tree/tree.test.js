const {strictEqual, deepStrictEqual} = require('assert')

const Node = require('../../src/tree/node')
const Tree = require('../../src/tree/tree')

describe('Tree', function() {
  describe('#postOrder', function() {
    it('should have a function called postOrder', function() {
      strictEqual(typeof Tree.postOrder, 'function')
    })

    it('should return empty array for empty tree', function() {
      deepStrictEqual(Tree.postOrder(new Tree().root), [])
    })

    describe('when only 1 node is present', function() {
      it('should return 10 data when root node is 10', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(10)).root), [10])
      })
  
      it('should return 11 data when root node is 11', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(11)).root), [11])
      })
    })

    describe('when 2 nodes are present ', function() {
      it('should return post-order of left node and root node', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(11, new Node(2))).root), [2,11])
      })
      it('should return post-order of right node and root node', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(11, null, new Node(2))).root), [2,11])
      })
    })

    describe('when skewed left tree with three nodes is present', function() {
      it('should return post-order of 3 nodes', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(1, new Node(2, new Node(3)))).root), [3, 2, 1])
      })
    })

    describe('when skewed right tree with three nodes is present', function() {
      it('should return post-order of 3 nodes', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(1, null, new Node(2, null, new Node(8)))).root), [8, 2, 1])
      })
    })

    describe('when nested tree is present', function() {
      it('should return post-order of the three', function() {
        deepStrictEqual(Tree.postOrder(new Tree(new Node(5, null,new Node(2, new Node(3), new Node(10)))).root), [3, 10, 2, 5])
      })
    })
  })

  describe('#preOrder', function() {
    it('should have a function called preOrder', function() {
      strictEqual(typeof Tree.preOrder, 'function')
    })

    it('should return empty array for empty tree', function() {
      deepStrictEqual(Tree.preOrder(new Tree().root), [])
    })

    describe('when only 1 node is present', function() {
      it('should return 10 data when root node is 10', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(10)).root), [10])
      })
  
      it('should return 11 data when root node is 11', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(11)).root), [11])
      })
    })

    describe('when 2 nodes are present ', function() {
      it('should return pre-order of root node and left node', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(11, new Node(2))).root), [11, 2])
      })
      it('should return pre-order of root node and right node', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(11, null, new Node(2))).root), [11, 2])
      })
    })

    describe('when skewed left tree with three nodes is present', function() {
      it('should return pre-order of 3 nodes', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(1, new Node(2, new Node(3)))).root), [1, 2, 3])
      })
    })

    describe('when skewed right tree with three nodes is present', function() {
      it('should return pre-order of 3 nodes', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(1, null, new Node(2, null, new Node(8)))).root), [1, 2, 8])
      })
    })

    describe('when nested tree is present', function() {
      it('should return pre-order of the three', function() {
        deepStrictEqual(Tree.preOrder(new Tree(new Node(5, null,new Node(2, new Node(3), new Node(10)))).root), [5, 2, 3, 10])
      })
    })
  })

  describe('#inOrder', function() {
    it('should have a function called inOrder', function() {
      strictEqual(typeof Tree.inOrder, 'function')
    })

    it('should return empty array for empty tree', function() {
      deepStrictEqual(Tree.inOrder(new Tree().root), [])
    })

    describe('when only 1 node is present', function() {
      it('should return 10 data when root node is 10', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(10)).root), [10])
      })
  
      it('should return 11 data when root node is 11', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(11)).root), [11])
      })
    })

    describe('when 2 nodes are present ', function() {
      it('should return in-order of left node and root node', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(11, new Node(2))).root), [2,11])
      })
      it('should return in-order of root node and right node', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(11, null, new Node(2))).root), [11, 2])
      })
    })

    describe('when skewed left tree with three nodes is present', function() {
      it('should return in-order of 3 nodes', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(1, new Node(2, new Node(3)))).root), [3, 2, 1])
      })
    })

    describe('when skewed right tree with three nodes is present', function() {
      it('should return in-order of 3 nodes', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(1, null, new Node(2, null, new Node(8)))).root), [1, 2, 8])
      })
    })

    describe('when nested tree is present', function() {
      it('should return in-order of the three', function() {
        deepStrictEqual(Tree.inOrder(new Tree(new Node(5, null,new Node(2, new Node(3), new Node(10)))).root), [5, 3, 2, 10])
      })
    })
  })
})
