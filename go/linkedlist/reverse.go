package linkedlist


func ReverseLinkedList(head *LinkedList) *LinkedList {
	var prev *LinkedList = nil
	curr := head 

	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}
	return curr
}