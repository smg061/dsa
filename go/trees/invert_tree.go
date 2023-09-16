package trees


func InvertTree(root *BinaryTree) *BinaryTree {
	if root == nil {
		return nil
	}
	root.Left, root.Right = root.Right, root.Left

	InvertTree(root.Left)
	InvertTree(root.Right)
	return root
}