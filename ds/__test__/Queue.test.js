import Queue from "../Queue";

describe("Queue", () => {
  it("Should create an empty queue", () => {
    const queue = new Queue();

    expect(queue).not.toBeNull();
  });

  it("Should enqueue an element to the queue", () => {
    const queue = new Queue();

    queue.enqueue(1);

    expect(queue.items[0]).toEqual(1);
    expect(queue.rear).toEqual(1);
  });

  it("Should dequeue an element from the queue", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toEqual(null);

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toEqual(1);
  });

  it("Should check if queue is empty", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);

    expect(queue.isEmpty()).toEqual(false);
  });

  it("Should peek at element from queue", () => {
    const queue = new Queue();

    expect(queue.peek()).toEqual(null);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);

    queue.dequeue();

    expect(queue.peek()).toEqual(2);
  });
});
