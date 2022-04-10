const LinkedList = require('./linked-list');

test('LinkedList => isEmpty() method test', () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBe(true);
    linkedList.add(1);
    expect(linkedList.isEmpty()).toBe(false);
});

test('LinkedList => add() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.getList()).toBe('1 2 3');
});

test('LinkedList => getLast() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    expect(linkedList.getLast().value).toBe(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.getLast().value).toBe(3);
});

test('LinkedList => getSize() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    expect(linkedList.getSize()).toBe(2);
});

test('LinkedList => insertAt() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.insertAt(10, 2)
    expect(linkedList.getList()).toBe('1 2 10 3 4');
    linkedList.insertAt(111, 0)
    expect(linkedList.getList()).toBe('111 1 2 10 3 4');
});

test('LinkedList => removeFrom() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.removeFrom(2)
    expect(linkedList.getList()).toBe('1 2 4');
    linkedList.removeFrom(0)
    expect(linkedList.getList()).toBe('2 4');
});

test('LinkedList => removeValue() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.removeValue(2)
    expect(linkedList.getList()).toBe('1 3 4');
    linkedList.removeValue(1)
    expect(linkedList.getList()).toBe('3 4');
});

test('LinkedList => indexOf() method test', () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(3)).toBe(2);
});