class Node {
    
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    constructor() {
        this.head = new Node(null);
    }

    insert(value) {
        const newNode = new Node(value);
        const current = this.head;

        while(current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }
}