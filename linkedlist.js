// This is a singly Linked List Node
class listNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function that creates and traverses a singly Linked List
  function deleteOver50(data) {
    // Initialize the head of the Linked List
    let head = new listNode(data[0]);
    let current = head;
  
    // Create the Linked List
    for (let i = 1; i < data.length; i++) {
      current.next = new listNode(data[i]);
      current = current.next;
    }
  
    // Traverse the Linked List and delete data points over 50
    current = head;
    while (current !== null && current.next !== null) {
      if (current.next.data > 50) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  
    // Print the new Linked List
    current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  // Test case 1
  let data1 = [38, 74, 87, 21, 91, 98, 73, 41, 29, 3, 72, 94, 12, 13, 16];
  console.log("Original List:");
  console.log(data1.join(', '));
  console.log("Modified List:");
  deleteOver50(data1);
  
  // Some additional test cases
  let data2 = [60, 70, 80, 90];
  console.log("Original List:");
  console.log(data2.join(', '));
  console.log("Modified List:");
  deleteOver50(data2);
  
  let data3 = [10, 20, 30, 40, 50];
  console.log("Original List:");
  console.log(data3.join(', '));
  console.log("Modified List:");
  deleteOver50(data3);

  /*
  * Linked lists can lead to memory leaks if not properly managed, especially in languages without automatic memory management.
  * If nodes are not properly deallocated, it can lead to memory consumption issues.
  * Solution: Always free the memory occupied by a node when it is deleted.
  * 
  * Repeatedly traversing a linked list to perform operations can result in poor performance, especially for large lists.
  * Solution: Optimize algorithms by using techniques such as keeping a reference to the tail of the list or using a doubly linked list for reverse traversal when needed.
  */