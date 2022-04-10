const Queue = require('./queue');

test('Queue => isEmpty() method test', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
});

test('Queue => enqueue() method test', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.getQueue()).toBe('1 2 3');
});

test('Queue => dequeue() method test', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.getQueue()).toBe('2 3');
});

test('Queue => front() method test', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front()).toBe(1);
});