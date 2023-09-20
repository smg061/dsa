import { BinaryTreeNode } from "./binary_tree.ts";


const maximumTreeDepth = (root: BinaryTreeNode | null): number => {
    if (!root) return 0;
    return Math.max(1+ maximumTreeDepth(root.left), maximumTreeDepth(root.right));
};

const maximumTreeDepthIter = (root: BinaryTreeNode | null): number => {
    const queue: [BinaryTreeNode, number][]= [];

    if (!root) return 0;

    queue.push([root, 1]);
    let maxDepth = 1;

    while(queue.length > 0) {

        const current = queue.shift();
        if(!current) continue;

        let [node, depth] = current;
        if (depth > maxDepth) {
            maxDepth = depth;
        }

        if (node.left) {
            queue.push([node.left, depth + 1]);
        }

        if (node.right) {
            queue.push([node.right, depth + 1]);
        }

    }
    return maxDepth;
}



(()=> {

    const root = new BinaryTreeNode(1,
        new BinaryTreeNode(2,
            new BinaryTreeNode(4,
                new BinaryTreeNode(8,null,null),
                new BinaryTreeNode(9,null,null)
            ),
            new BinaryTreeNode(5,
                new BinaryTreeNode(10,null,null),
                new BinaryTreeNode(11,null,null)
            )
        ),
        new BinaryTreeNode(3,
            new BinaryTreeNode(6,
                new BinaryTreeNode(12,null,null),
                new BinaryTreeNode(13,null,null)
            ),
            new BinaryTreeNode(7,
                new BinaryTreeNode(14,null,null),
                new BinaryTreeNode(15,null,null)
            )
        )
    );

    console.log(maximumTreeDepth(root));
})()