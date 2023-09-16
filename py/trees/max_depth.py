from binary_tree import BinaryTree, generate_tree

def max_tree_depth(root: BinaryTree)-> int:
    if root is None:
        return 0
    return 1 + max(max_tree_depth(root.left), max_tree_depth(root.right))

# O(n) time | O(n) space

def max_tree_depth_iter(root: BinaryTree)-> int:
    queue = [(root, 1)]
    max_depth = 0
    
    while len(queue):
        current, current_depth = queue.pop(0)
        if current is None:
            continue
        if current_depth > max_depth:
            max_depth = current_depth
        queue.append((current.left, current_depth + 1))
        queue.append((current.right, current_depth + 1))
    return max_depth

if __name__ == "__main__":
    root = generate_tree(3)
    print(max_tree_depth(root))
    print(max_tree_depth_iter(root))
    print(root.as_list())
    
