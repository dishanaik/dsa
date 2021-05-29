const {strictEqual, deepStrictEqual} = require('assert')

const Node = require('../../src/tree/node')
const Tree = require('../../src/tree/tree')

describe('Tree', function() {
  let tree = null
  beforeEach(function() {
    tree = new Tree()
  })
  describe('#height', function() {
    it('should give the height of the tree', function() {
      tree.root = new Node(10, new Node(3, null, new Node(7)), new Node(5, new Node(9), new Node(12)))
      strictEqual(tree.height(), 3)
    })
  })

  describe('#depthOfNode', function() {
    it('should return depth of the node', function() {
      tree.root = new Node(10, new Node(3, null, new Node(7)), new Node(5, new Node(9), new Node(12)))
      let toFindNode = tree.root.right.right
      strictEqual(tree.depthOfNode(toFindNode), 3)
    })
  })

  describe('#isFullyBinaryTree', function() {
    describe('when tree is empty', function() {
      it('should be a fully binary tree', function() {
        strictEqual(tree.isFullyBinaryTree(), true)
      })
    })

    describe('when 1 node is present', function() {
      beforeEach(function() {
        tree.root = new Node(10)
      })
      it('should be a fully binary tree', function() {
        strictEqual(tree.isFullyBinaryTree(), true)
      })
    })

    describe('when root node doesn\'t have left child', function() {
      beforeEach(function() {
        tree.root = new Node(10, null, new Node(1))
      })
      it('should not be a fully binary tree', function() {
        strictEqual(tree.isFullyBinaryTree(), false)
      })
    })

    describe('when root node doesn\'t have right child', function() {
      beforeEach(function() {
        tree.root = new Node(10, new Node(1), null)
      })
      it('should not be a fully binary tree', function() {
        strictEqual(tree.isFullyBinaryTree(), false)
      })
    })

    describe('when tree with both left and right nodes are present', function() {
      beforeEach(function() {
        tree.root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)))
      })
      it('should be a fully binary tree', function() {
        strictEqual(tree.isFullyBinaryTree(), true)
      })
    })
  })

  describe('#isPerfectBinaryTree', function() {
    describe('when tree is empty', function() {
      it('should be perfect binary tree', function() {
        strictEqual(tree.isPerfectBinaryTree(), true)
      })
    })

    describe('when 1 node is present', function() {
      beforeEach(function() {
        tree.root = new Node(10)
      })
      it('should be perfect binary tree', function() {
        strictEqual(tree.isPerfectBinaryTree(), true)
      })
    })

    describe('when right node is not present', function() {
      beforeEach(function() {
        tree.root = new Node(10, new Node(1))
      })
      it('should not be perfect binary tree', function() {
        strictEqual(tree.isPerfectBinaryTree(), false)
      })
    })

    describe('when left node is not present', function() {
      beforeEach(function() {
        tree.root = new Node(10, null, new Node(1))
      })
      it('should not be perfect binary tree', function() {
        strictEqual(tree.isPerfectBinaryTree(), false)
      })
    })

    
    describe('when both subtrees are present', function() {
      beforeEach(function() {
        tree.root = new Node(10, new Node(1), new Node(2))
      })
      it('should be perfect binary tree', function() {
        strictEqual(tree.isPerfectBinaryTree(), true)
      })
    })
  })

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

  describe('#heightOfNode', function() {
    describe('when node is empty', function() {
      it('should return zero', function() {
        strictEqual(Tree.heightOfNode(null), 0)
      })
    })

    describe('when one node is present', function() {
      it('should return zero', function() {
        strictEqual(Tree.heightOfNode(new Node(20)), 1)
      })
    })

    describe('when node has only left node', function() {
      it('should give the height as 1', function() {
        strictEqual(Tree.heightOfNode(new Node(20, new Node(10))), 2)
      })
    })

    describe('when node has only right node', function() {
      it('should give the height as 1', function() {
        strictEqual(Tree.heightOfNode(new Node(20, null, new Node(10))), 2)
      })
    })

    describe('when tree has subtrees with unequal heights', function() {
      it('should give the height of tallest subtree + 1', function() {
        strictEqual(Tree.heightOfNode(new Node(5, null,new Node(2, new Node(3), new Node(10)))), 3)
      })
    })
  })
})
