import { BinaryTreeNode } from "./binary_tree";


const reverseTree = (root: BinaryTreeNode | null): BinaryTreeNode | null => {
    if (!root) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    reverseTree(root.left);
    reverseTree(root.right);
    return root;
};