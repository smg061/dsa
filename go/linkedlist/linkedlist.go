package linkedlist

type LinkedList struct {
	Next *LinkedList
	Value int
}

func (ll LinkedList) Print() {
	if ll.Next != nil {
		ll.Next.Print()
	}
	println(ll.Value)
}
