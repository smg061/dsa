type TreeNode<T> = {
    data: T;
    children?: TreeNode<T>[];
};
// Path: tree.ts

type Tree<T> = {
    root: TreeNode<T>;
};

const tree: Tree<string> = {
    root: {
        data: 'root',
        children: [
            {
                data: 'child1',
                children: [
                    {
                        data: 'child1.1',
                    },
                    {
                        data: 'child1.2',
                    },
                ],
            },
            {
                data: 'child2',
            },
        ],
    },
};

function generateRandomTree<T>(depth: number, maxChildren: number, dataGenerator: () => T): Tree<T> {
    const root: TreeNode<T> = {
        data: dataGenerator(),
    };
    let currentDepth = 0;
    const tree: Tree<T> = {
        root,
    };

    const queue: TreeNode<T>[] = [root];

    while (queue.length > 0) {
        const node = queue.shift()!;
        if (currentDepth > depth) break;
        currentDepth++;
        const numChildren = Math.floor(Math.random() * maxChildren);
        node.children = [];
        for (let i = 0; i < numChildren; i++) {
            const child: TreeNode<T> = {
                data: dataGenerator(),
            };
            node.children.push(child);
            queue.push(child);
        }
    }

    return tree;
}


const randomTree = generateRandomTree(10, 4, () => Math.floor(Math.random() * 100));


function preorderTraverse<T>(node: TreeNode<T>, callback: (node: TreeNode<T>) => void) {
    callback(node);

    if (!node.children) return;

    node.children.forEach((child) => {
        preorderTraverse(child, callback);
    });
    return;
}

function postorderTraverse<T>(node: TreeNode<T>, callback: (node: TreeNode<T>) => void) {
    // traverse children first
    if (node.children) {
        node.children.forEach((child) => {
            postorderTraverse(child, callback);
        });
    }
    callback(node);

}

function inorderTraverse<T>(node: TreeNode<T>, callback: (node: TreeNode<T>) => void) {
    if(node?.children?.length >= 1){
        inorderTraverse(node.children[0], callback); // traverse left
    }
    callback(node); // visit TreeNode
    if(node.children?.length === 2){
        inorderTraverse(node.children[1], callback); // traverse right
    }
}

function printTree<T>(node: TreeNode<T>, indent: string = '') {
    console.log(indent + node.data);
    if (node.children) {
        node.children.forEach((child) => {
            printTree(child, indent + '  ' + '-|');
        });
    }
}

(() => {

    const cb = (node: TreeNode<string | number>) => {
        console.log(node.data);
    };
    printTree(randomTree.root,' ' );

    console.log('------------------');

    postorderTraverse(tree.root,cb);

    console.log('------------------');

    inorderTraverse(tree.root,cb);


})()
