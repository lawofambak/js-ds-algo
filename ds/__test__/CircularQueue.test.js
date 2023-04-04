import CircularQueue from "../CircularQueue";

describe("Circular Queue", () => {
  it("Should create a circular queue", () => {
    const circularQueue = new CircularQueue(5);

    expect(circularQueue).not.toBeNull();
  });

  it("Should correctly enqueue an element to the queue", () => {
    const circularQueue = new CircularQueue(5);

    circularQueue.enqueue(1);

    expect(circularQueue.items[0]).toEqual(1);

    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    circularQueue.enqueue(4);
    circularQueue.enqueue(5);

    expect(circularQueue.items[4]).toEqual(5);

    expect(circularQueue.enqueue(6)).toEqual(null);
  });

  it("Should correctly dequeue an element from the queue", () => {
    const circularQueue = new CircularQueue(5);

    expect(circularQueue.dequeue()).toEqual(null);

    circularQueue.enqueue(1);
    circularQueue.enqueue(2);

    expect(circularQueue.dequeue()).toEqual(1);
  });

  it("Should correctly insert element at beginning of queue when front pointer reaches the end", () => {
    const circularQueue = new CircularQueue(5);

    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    circularQueue.enqueue(4);
    circularQueue.enqueue(5);

    expect(circularQueue.front).toEqual(0);
    expect(circularQueue.rear).toEqual(0);

    circularQueue.dequeue();
    circularQueue.dequeue();
    circularQueue.dequeue();
    circularQueue.dequeue();
    circularQueue.dequeue();

    expect(circularQueue.front).toEqual(0);
    expect(circularQueue.rear).toEqual(0);

    circularQueue.enqueue(6);
    circularQueue.enqueue(7);
    circularQueue.enqueue(8);

    circularQueue.dequeue();
    circularQueue.dequeue();

    circularQueue.enqueue(9);
    circularQueue.enqueue(10);

    expect(circularQueue.front).toEqual(2);
    expect(circularQueue.rear).toEqual(0);
  });

  it("Should check if queue is empty", () => {
    const circularQueue = new CircularQueue(5);

    expect(circularQueue.isEmpty()).toEqual(true);

    circularQueue.enqueue(1);

    expect(circularQueue.isEmpty()).toEqual(false);
  });

  it("Should check if queue is full", () => {
    const circularQueue = new CircularQueue(5);

    expect(circularQueue.isFull()).toEqual(false);

    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
    circularQueue.enqueue(4);
    circularQueue.enqueue(5);

    expect(circularQueue.isFull()).toBe(true);
  });

  it("Should peek at element from queue", () => {
    const circularQueue = new CircularQueue(5);

    expect(circularQueue.peek()).toEqual(null);

    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);

    expect(circularQueue.peek()).toEqual(1);

    circularQueue.dequeue();

    expect(circularQueue.peek()).toEqual(2);
  });
});
