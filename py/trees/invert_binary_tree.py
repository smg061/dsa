from binary_tree import BinaryTree

# O(n) time | O(d) space


def invert_tree(root: BinaryTree | None) -> BinaryTree | None:
    if root is None:
        return None
    root.left, root.right = root.right, root.left
    invert_tree(root.left)
    invert_tree(root.right)
    return root


# O(n) time | O(n) space
def invert_tree_iter(root: BinaryTree | None) -> BinaryTree | None:
    queue = [root]
    while len(queue):
        current = queue.pop(0)
        if current is None:
            continue
        current.left, current.right = current.right, current.left
        queue.append(current.left)
        queue.append(current.right)
    return root


if __name__ == "__main__":
    tree = BinaryTree(1)
    tree.left = BinaryTree(2)
    tree.right = BinaryTree(3)
    tree.left.left = BinaryTree(4)
    tree.left.right = BinaryTree(5)
    tree.right.left = BinaryTree(6)
    tree.right.right = BinaryTree(7)

    print(tree.as_list())

    invert_tree(tree)

    print(tree.as_list())
