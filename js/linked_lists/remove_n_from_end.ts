import { ListNode, } from "./linked_list";

// given the head of a list node, remove the nth node from the end of the list and return its head
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let currentNode = head

    let length = 0;


    while(currentNode) {
        length++;
        currentNode = currentNode.next
    }
    let targetIdx = length - n;

    let idx = 0;

    currentNode = head;

    while(idx < targetIdx && currentNode) {
        idx++
        currentNode = currentNode.next
    }
    let temp = currentNode?.next
    if(currentNode) currentNode.next = temp?.next ?? null
    // return null
    return head
}