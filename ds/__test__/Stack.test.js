import Stack from "../Stack";

describe("Stack", () => {
  it("Should create an empty stack", () => {
    const stack = new Stack();

    expect(stack).not.toBeNull();
  });

  it("Should add elements to stack", () => {
    const stack = new Stack();

    expect(stack.push(1)).toEqual(1);
    expect(stack.push(2)).toEqual(2);
  });

  it("Should remove elements from stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toEqual(2);
  });

  it("Should check if stack is empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);

    expect(stack.isEmpty()).toEqual(false);
  });

  it("Should peek at element from stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toEqual(3);

    stack.pop();

    expect(stack.peek()).toEqual(2);
  });
});
