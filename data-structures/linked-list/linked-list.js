class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getValue() {
        return this.value;
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    getLast() {
        if (this.size === 0)
            return null;
        else {
            let last = this.head;
            while (last.next !== null)
                last = last.next;
            return last;
        }
    }

    getList() {
        let list = '';
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            list += current.value.toString() + ' ';
            current = current.next;
        }
        return list.trim();
    }

    getHead() {
        return this.head;
    }

    add(value) {
        const newNode = new ListNode(value);
        if (this.head === null)
            this.head = newNode;
        else {
            const last = this.getLast();
            last.next = newNode;
        }
        this.size++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size)
            throw new Error('Index out of bounds');
        if (index === 0) {
            const newNode = new ListNode(value);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++)
                prev = prev.next;
            const newNode = new ListNode(value);
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index > this.size)
            throw new Error('Index out of bounds');
        if (index === 0)
            this.head = this.head.next;
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++)
                prev = prev.next;
            prev.next = prev.next.next;
        }
        this.size--;
    }

    removeValue(value) {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                if (prev === null)
                    this.head = this.head.next;
                else if (current.next === null)
                    prev.next = null;
                else
                    prev.next = current.next;
                this.size--
                return;
            }
            prev = current;
            current = current.next;
        }
        throw new Error('Value not found');
    }

    indexOf(value) {
        let current = this.head
        for (let i = 0; i < this.size; i++) {
            if (current === null)
                return -1;
            if (current.value === value)
                return i;
            current = current.next;
        }
    }
}