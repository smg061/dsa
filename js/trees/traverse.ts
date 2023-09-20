import { BinaryTreeNode, generateTree } from "./binary_tree.ts";


// Traverse a tree and return the values of the nodes in an array using DFS


const traverse = (root: BinaryTreeNode | null): number[] => {
    const result: number[] = [];

    const traverseHelper = (node: BinaryTreeNode | null) => {
        if (!node) return;
        traverseHelper(node.left);
        result.push(node.value);
        traverseHelper(node.right);
    }

    traverseHelper(root);
    return result;
}


(()=> {
    const tree = generateTree(4);
    tree.printTree();
    console.log(traverse(tree));
})()
