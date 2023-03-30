// Queue is a linear data structure that follows the FIFO principle

export default class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return element;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front];
  }
}

// Time complexity of enqueue: O(1)
// Time complexity of dequeue: O(1)

/**
 * Note that deleting an element from the queue does not
 * remove the element completely from from the queue and
 * leaves a hole (undefined). Can also use the "shift()"
 * method to remove the first element from the queue but,
 * it can be slower than "pop()" as all the remaining elements
 * are shifted down by one index.
 */
