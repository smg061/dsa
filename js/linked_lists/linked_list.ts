export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }

}

export class LinkedList {
    head: ListNode
    tail: ListNode | null;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * 
     * @param index @description: 0-based index
     * @return {number}
    
        @description Get the value of the index-th node in the linked list. If the index is invalid, return -1.
    */
    public get(index: number): number {
        if (!this.head) return -1;
        let curr = this.head.next;
        let i = 0;
        while (curr !== null && i < index) {
            curr = curr.next;
            i++;
        }
        return curr ? curr.val : -1;
    }

    public insertHead(val: number) {
        const node = new ListNode(val)
        node.next = this.head.next;
        this.head.next = node
        if(!node.next) {
            this.tail = node
        } 
    }

    public insertTail(val:number) {
        const node = new ListNode(val)
        if(this.tail) this.tail.next = node;
        this.tail = node
    }
    remove(idx: number): boolean {
        let i = 0;
        let curr: ListNode | null = this.head;
        // we move up to the one before the index we want to remove
        while(i < idx && curr) {
            i++;
            curr = curr.next
        }
        if(!curr) return false
        
        curr.next = curr.next ? curr.next.next : null
        if(curr.next === this.tail) this.tail = curr
        return true
    }

    getValues(): number[] {
        let res: number[] = [];
        let curr = this.head.next;
        while(curr) {
            res.push(curr.val)
            curr = curr.next
        }
        return res
    }

}