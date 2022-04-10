const LinkedList = require('../linked-list/linked-list');

module.exports = class Queue {
    constructor() {
        this.items = new LinkedList();
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    enqueue(item) {
        this.items.add(item);
    }

    dequeue() {
        if (!this.isEmpty())
            this.items.removeFrom(0);
    }

    front() {
        if (this.isEmpty())
            return null;
        else
            return this.items.getHead().getValue();
    }

    getQueue() {
        return this.items.getList();
    }
}