//compare two linkedlist if the both are same return 1 or else 0

function compareLinkedLists(head1, head2) {
  let current1 = head1;
  let current2 = head2;

  while (current1 && current2) {
    if (current1.value !== current2.value) {
      return 0; // Not equal
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  // If both are null, they are equal
  return current1 === current2 ? 1 : 0;
}

const head1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(compareLinkedLists(head1, head1)); // 1
console.log(compareLinkedLists(head1, { value: 1, next: null })); // 0