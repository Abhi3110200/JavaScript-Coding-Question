//how to reverse a linked list

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next; // Store next node
    current.next = prev; // Reverse current node's pointer
    prev = current;      // Move pointers one position forward
    current = next;
  }
  return prev; // New head of the reversed list
}

const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(reverseLinkedList(head));