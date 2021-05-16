// 1 1 2 3 5 8 13 ...

function fibonacci(n) {
  if(n < 1) return null
  
  if(n == 1 || n == 2) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }  
}

/* 
1  - 1
2   - 1
3 - 1+1
4 - 1+2
5 - 2+3

1 || 2 -> 1
3-> fibonacci(1)+ fibonacci(2)
4-> fibonacci(2) + fibonacci(3)
5-> 3+4
6- 4+5
x= (x-1)+ (x-2)


*/
console.log(
  fibonacci(-4) == null
)
console.log(
  fibonacci(1) == 1
)
console.log(
  fibonacci(2) == 1
)
console.log(
  fibonacci(3) == 2
)
console.log(
  fibonacci(6) == 8
)
