package main

func FibonacciIter(position int) int {
	a, b := 1, 1

	for i := 1; i < position; i++ {
		b, a = a+b, b
	}
	return a
}

func FibonacciRecur(position int) int {

	if position == 1 || position == 2 {
		return 1
	}
	return FibonacciRecur(position-2) + FibonacciRecur(position-1)
}
