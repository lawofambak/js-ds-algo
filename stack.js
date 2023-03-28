// Stack is a linear data structure that follows the LIFO principle

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(7);
console.log(newStack.isEmpty()); // False
console.log(newStack.peek()); // 7
console.log(newStack.pop()); // 7

// Time complexity of inserting an element: O(1)
// Time complexity of removing an element: O(1)
// Time complexity of accessing an element: O(n)
