package trees

import (
	"math/rand"
)
type BinaryTree struct {
	Left *BinaryTree
	Right *BinaryTree
	Value int
}

func (bt BinaryTree) Print() {
	if bt.Left != nil {
		bt.Left.Print()
	}
	println(bt.Value)
	if bt.Right != nil {
		bt.Right.Print()
	}
}


func GenerateTree(depth int) *BinaryTree {
	if depth == 0 {
		return nil
	}
	return &BinaryTree{
		Left: GenerateTree(depth - 1),
		Right: GenerateTree(depth - 1),
		Value: rand.Int(),
	}
}