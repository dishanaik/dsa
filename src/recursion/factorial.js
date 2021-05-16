function factorial(n) {
  if(n<0) return
  if(n == 0 || n == 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(-1))

/*
  1 -> find out the base case
  2 -> find out the loop

  0 -> 1
  1 -> 1
  2 -> 2

  n! = n * (n - 1) * (n - 2) * ... * 2 * 1 * 1

  f() = 2 * (1)

  g() = 3 * f()

  h(1) = 1
  h(0) = 1
  h(x) = x * h(x - 1) 

  h(4)
*/
