
import { ListNode, LinkedList } from './linked_list';

// Merge two sorted linked lists and return it as a sorted list.



export function mergeLists(l1: ListNode | null, l2: ListNode | null) {

    let dummyHead = new ListNode(-1)
    let head = dummyHead

    let p1 = l1;
    let p2 = l2

    while(p1 && p2) {
        if(p1.val < p2.val) {
            head.next = p1
            p1 = p1.next        
        } else {
            head.next = p2
            p2 = p2.next
        }
        head = head.next
    }
    
    head.next = p1 ?? p2

    return dummyHead.next
}

