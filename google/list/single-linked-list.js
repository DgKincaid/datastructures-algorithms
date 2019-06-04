class Node {
    constructor(value) {
        this.next;
        this.data = value;
    }
}

class LinkedList {
    constructor() {
        this.head;
    }

    insert(value) {
        let current = this.head;
        
        if(!this.head) {
            this.head = new Node(value);
            return;
        }

        while(current.next != null) {
            current = current.next;
        }

        current.next = new Node(value);
    }

    print() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    remove(value) {
        let current = this.head;
        let prev = current;

        while(current) {
            if(current.data === value) {
                prev.next = current.next;
                return;
            }

            prev = current;
            current = current.next;
        }
    }
}

function main() {
    const linkedList = new LinkedList();

    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(7);
    linkedList.insert(8);
    linkedList.insert(9);
    linkedList.insert(87);

    linkedList.remove(3);

    linkedList.print();
}

main();