import { LinkedList, ListNode } from "./linked_list";


// given two non=empty linked lists representing tow non-negative intergers. The digits are stored in reverse order. Return the sum as a linkedlist
export function addTwoNums(l1: ListNode, l2: ListNode): ListNode | null {
    let dummyHead = new ListNode(-1)
    let head = dummyHead;
    let p1 : ListNode | null = l1;
    let p2 : ListNode | null = l2
    
    let carryOn = 0;

    while (p1 || p2) {
        let sum = carryOn

        if (p1) {
            sum += p1.val
            p1 = p1.next
        }
        if(p2) {
            sum += p2.val
            p2 = p2.next
        }
        head.next = new ListNode(sum%10)
        carryOn = Math.floor(sum/10)
        head = head.next
    }
    if (carryOn > 0) {
        head.next = new ListNode(carryOn)
    }
    return dummyHead.next
}