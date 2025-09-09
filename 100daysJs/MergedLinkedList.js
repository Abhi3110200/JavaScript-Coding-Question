// Merge two sorted linked lists
function mergeSortedLists(head1, head2) {
  let current = { value: null, next: null };
  let tail = current;

  while (head1 && head2) {
    if (head1.value < head2.value) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next;
  }

  // Append any remaining nodes from either list
  tail.next = head1 || head2;

  return current.next;
}


const head1 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 5,
      next: null
    }
  }
};

const head2 = {
  value: 2,
  next: {
    value: 8,
    next: {
      value: 6,
      next: null
    }
  }
};
function printLinkedList(head) {
  let current = head;
  let result = '';
  while (current) {
    result += current.value + (current.next ? '->' : '->null');
    current = current.next;
  }
  console.log(result);
}

const mergedHead = mergeSortedLists(head1, head2);
printLinkedList(mergedHead);

console.log(mergeSortedLists(head1, head2));

//i want in 1->2->3->4->5->6->null like this format



