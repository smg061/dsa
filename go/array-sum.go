package main

func SumSlice(list []int) int {
	if len(list) == 0 {
		return 0
	}
	return list[0] + SumSlice(list[1:])
}
