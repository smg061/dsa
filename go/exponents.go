package main

func ExponentIter(a, n int) int {
	res := 1

	for i := 0; i < n; i++ {
		res *= n
	}
	return res
}

func ExponentRecur(a, n int) int {
	// base cases
	if n == 1 {
		return a
	}
	if n == 0 {
		return 1
	}

	if n%2 == 0 {
		result := ExponentRecur(a, int(n/2))
		return result * result
	} else if n%2 == 1 {
		result := ExponentRecur(a, int(n/2))
		return result * result * a
	}
	return a
}
