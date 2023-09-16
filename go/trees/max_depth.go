package	trees

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
func MaxTreeDepth(root *BinaryTree) int {
	if root == nil {
		return 0
	}
	leftDepth := MaxTreeDepth(root.Left)
	rightDepth := MaxTreeDepth(root.Right)

	return max(leftDepth, rightDepth) + 1
}
