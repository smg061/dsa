package linkedlist

func DetectCycle(head *LinkedList) bool {

	slowPtr := head
	fastPtr := head

	for fastPtr != nil && fastPtr.Next != nil {

		slowPtr = slowPtr.Next
		fastPtr = fastPtr.Next.Next

		if slowPtr == fastPtr {
			return true
		}
	}
	return false
}
