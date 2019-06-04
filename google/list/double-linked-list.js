class Node {
    constructor(data) {
        this.next;
        this.prev;

        this.data = data;
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

        while(current.next) {
            current = current.next;
        }

        current.next = new Node(value);
        current.next.prev = current;
    }

    print() {
        let current = this.head;

        while(current) {
            let row = current.data;

            if(current.prev) {
                row = row + ' ' + current.prev.data;
            }

            console.log(row);
            current = current.next;
        }
    }
}

function main() {
    const linkedList = new LinkedList();

    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);
    linkedList.insert(2);
    linkedList.insert(1);

    linkedList.print();
}

main();