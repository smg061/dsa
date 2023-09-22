import { ListNode } from "./linked_list";


export function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return curr
}


