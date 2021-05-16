
class CircularQueue{
   constructor(){
    this.arr = []
    this.head = null
    this.tail = null
    this.size = 5
    this.i = 0
    
   }

   isEmpty() {
    return this.head == null
   }

   enque(val) {
    if(this.isEmpty()) {
     this.arr[this.i] =  val
     this.head = this.i
     this.tail = this.head
     this.i = this.i+1
    } else {
     if(this.i == this.size) {
      this.i = 0
      this.arr[this.i] = val
      this.tail = this.i
      this.i= this.i+1
     } else {
      this.arr[this.i] = val
      this.tail = this.i
       this.i= this.i+1
     }
    }
   }
 
   deque() {
    if(isEmpty()) {
     return
    } else {
     delete this.arr[this.head]
     this.head= this.head +1
    }
   }
  }

  module.exports = CircularQueue
