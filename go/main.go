package main

import "fmt"

func main() {
	iterRes := FibonacciIter(10)
	recurRes := FibonacciRecur(10)

	fmt.Println("Testing fibonacci")
	fmt.Printf("%d %d \n", iterRes, recurRes)

	exponentRec := ExponentRecur(8, 8)

	exponentIter := ExponentIter(8, 8)

	fmt.Println("Testing exponent functions")
	fmt.Printf("%d %d \n", exponentRec, exponentIter)

	fmt.Println("Testing sum slice func")

	nums := []int{1, 2, 3, 4}
	nums2 := []int{10, 10, 2}

	fmt.Printf("%d\n", SumSlice(nums))

	fmt.Printf("%d\n", SumSlice(nums2))

    str1:= "Hewwo"

    str2:= "Gootbye"

    reversed1:= ReverseStringRecur(str1)

    reversed2 := ReverseStringRecur(str2)

    fmt.Println("Testing string reversal")

    fmt.Printf("%s %s", reversed1, reversed2)
}
