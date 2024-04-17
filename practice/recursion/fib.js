// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// for a fibbonnaci, i will need to run it until the amount of nums provided
// the num is the position, and the return is the value on that position
// fib(4) -> 1, 1, 2, 3 => 3
// so it needs to start in one, sum the last one, and run until the provided position
