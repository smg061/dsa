from typing import Any


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def walk(self):
        print(self.value)
        if self.left:
            self.left.walk()
        if self.right:
            self.right.walk()

    def as_list(self) -> list[Any]:
        return [
            self.value,
            self.left.as_list() if self.left else None,
            self.right.as_list() if self.right else None,
        ]


def generate_branch(value: int, current_depth: int):
    if current_depth == 0:
        return None
    tree = BinaryTree(value)
    tree.left = generate_branch(value + 1, current_depth - 1)
    tree.right = generate_branch(value + 1, current_depth - 1)
    return tree


def generate_tree(depth: int) -> BinaryTree:
    if depth == 0:
        return None
    current_depth = 1
    tree = BinaryTree(current_depth)
    tree.left = generate_branch(current_depth + 1, depth - 1)
    tree.right = generate_branch(current_depth + 1, depth - 1)
    return tree
