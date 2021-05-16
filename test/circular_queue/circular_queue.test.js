// const { strict, strictEqual } = require('assert')
// var assert = require('assert')
// const CircularQueue = require('../../src/circular_queue/circular_queue')

// describe('Circular Queue', function() {
//   var cq = null
//   beforeEach(function() {
//     cq = new CircularQueue 
//   })
//   describe('#isEmpty', function() {
//     describe('when empty', function() {
//       it('should return true', function() {
//         assert.strictEqual(cq.isEmpty(), true)
//       })
//     })
//     describe('when not empty', function() {
//       beforeEach(function() {
//         cq.arr = [1,2]
//         assert.strictEqual(cq.isEmpty(), false)
//       })
//     })
//   })

//   describe('#enque', function() {
//     describe('when empty', function() {
//       it('should enque the value', function() {
//         console.log("entered",cq.enque(10))
//         console.log("hi", cq.i)
//         assert(strictEqual(cq.arr[0],10))
//         assert(strictEqual(cq.head, 0))
//         assert(strictEqual(cq.tail, cq.head))
//         assert(strictEqual(cq.i, cq.i+1))
//       })
//     })
//     describe('when not empty', function() {
//       beforeEach(function() {
//         cq.size = 5
//         cq.arr = [1]
//         cq.i = 1
//       })
//       it('should enque the value', function() {
//         cq.enque(2)
//         assert.strictEqual(cq.i, 2)
//         assert.strictEqual(cq.tail, cq.i)
//       })
//     })
//   })
// })
