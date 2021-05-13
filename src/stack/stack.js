class Stack{
  constructor() {
    this.a = []
    this.i = 0
    this.size = 5
  }

  isEmpty(){
    return this.i == 0
   }
  
  isFull(){
    return this.size == this.i
   }
  
  push(val){
    if(this.isFull()){
     return
    } else{
       this.a[this.i++] = val
    }
   }
  
  pop() {
    if(!this.isEmpty()) {
     return this.a[--this.i]
    } else{
       return
    }
   }
  
  peek(){
    if(this.isEmpty()){
     return
    } else {
     return this.a[this.i-1]
    }
  }
} 

module.exports = Stack
