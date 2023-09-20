export class BinaryTreeNode {
  constructor(public value: number, public left: BinaryTreeNode | null, public right: BinaryTreeNode | null) {}

  public printTree(indent: string = "") {
    console.log(this.value);
    console.log("/\\")
    if (this.left) {
        console.log( this.left.value);
    }
    if (this.right) {
        console.log(indent + this.right.value);
    }
    console.log("  ");
    if (!this.left && !this.right) return;
    this.right.printTree(indent + "  ");
    this.left.printTree(indent + "  ");
  }
}

export const generateTree = (depth: number): BinaryTreeNode => {
    const root = new BinaryTreeNode(depth, null, null);
    if (depth === 1) return root;
    root.left = generateTree(depth - 1);
    root.right = generateTree(depth - 1);
    return root;
}


