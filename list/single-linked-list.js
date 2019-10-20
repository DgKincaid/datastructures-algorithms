class Node {
    
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null);
    }

    push_front(value) {
        const newNode = new Node(value);

        if(this.head.next === null) {
            this.head.next = newNode;
        } else {
            newNode.next = this.head.next;
            this.head.next = newNode;
        }
    }

    pop_front() {
        let node;

        if(this.head.next === null) {
            return null;
        } else {
            node = this.head.next;
            this.head.next = node.next;
            return node.value;
        }
    }

    push_back(value) {
        const newNode = new Node(value);
        let current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    pop_back() {
        let current = this.head;
        let previous;

        while(current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;

        return current.value;
    }

    size() {
        let count = 0;
        let current = this.head;

        while(current.next !== null) {
            current = current.next;
            count++;
        }

        return count;
    }

    empty() {
        return this.head.next === null;
    }

    value_at(index) {
        let current = this.head;
        let count = -1;

        while(current.next !== null && count !== index) {
            current = current.next;
            count++;
        }

        if(count === index) {
            return current.value;
        } else {
            return null;
        }
    }

    front() {
        let node;

        if(this.head.next === null) {
            return null;
        } else {
            node = this.head.next;
            return node.value;
        }
    }

    back() {
        let current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        return current.value;
    }

    insert_at(index, value) {
        let newNode = new Node(value);
        let current = this.head;
        let count = -1;

        while(current.next !== null && count !== index) {
            current = current.next;
            count++;
        }
        
        if(count === index) {
            if(current.next === null) {
                current.next = newNode;
            } else {
                newNode = current.next;
                current.next = newNode;
            }
        }
    }

    erase_at(index) {
        let current = this.head;
        let previous;

        let count = -1;

        while(current.next !== null && count !== index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
    }
}

module.exports = LinkedList;