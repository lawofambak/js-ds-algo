/**
 * Circular queue is a data structure that implements a queue with a
 * fixed size where the last element is connected to the first element.
 */

export default class CircularQueue {
  constructor(size) {
    this.items = [];
    this.size = size;
    this.front = 0;
    this.rear = 0;
    this.itemCount = 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      return null;
    }

    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.size;
    this.itemCount++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const element = this.items[this.front];
    delete this.items[this.front];
    this.front = (this.front + 1) % this.size;
    this.itemCount--;
    return element;
  }

  isEmpty() {
    return this.itemCount === 0;
  }

  isFull() {
    return this.itemCount === this.size;
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
 * The % operator is used when enqueueing and dequeuing
 * to wrap the pointers around to make a circular queue
 * function properly.
 */
