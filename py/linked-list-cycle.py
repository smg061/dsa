
"""
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

"""

class Node():
    def __init__(self, val):
        self.val = val
        self.next = None
    
class LinkedList():
    def __init__(self, val):
        self.head = Node(val)
        self.next = None
    def add(self, val):
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = Node(val)
    def add_cycle(self, val):
        curr = self.head
        while curr.next:
            print(curr)
            curr = curr.next
        curr.next = Node(val)
        curr.next.next = self.head
        
    def print(self):
        curr = self.head
        while curr:
            print(curr.val)
            curr = curr.next

def has_cycle(list: LinkedList)-> bool:
    
    slow = list.head
    fast = list.head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        print(f'slow: {slow}, fast: {fast}')
        if slow == fast:
            return True
    return False

if __name__ == '__main__':
    
    with_cycle = LinkedList(1)
    with_cycle.add(2)
    with_cycle.add(4)
    with_cycle.add_cycle(3)

    print(has_cycle(with_cycle))
    
    no_cycle = LinkedList(1)
    no_cycle.add(2)
    no_cycle.add(3)
    no_cycle.add(4)
    print(has_cycle(no_cycle))
    