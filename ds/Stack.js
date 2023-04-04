// Stack is a linear data structure that follows the LIFO principle

export default class Stack {
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

// Time complexity of inserting an element: O(1)
// Time complexity of removing an element: O(1)
// Time complexity of accessing an element: O(n)
