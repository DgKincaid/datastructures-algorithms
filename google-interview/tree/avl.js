const Queue = require('../queue/queue');

class Node {
    constructor(data){

        this.children = [];
        this.data = data;
    }
}

class AVLTree {
    constructor() {
        this.root;
    }

    insert(value) {
        if(!this.root) {
            this.root = new Node(value);
        }
    }

    print() {
        let queue = new Queue();

        queue.enqueue(this.root);

        while(queue.queue.length > 0) {
            let current = queue.dequeue();

            console.log(current.data);

            for(let item of current.children) {
                queue.enqueue(item);
            }
        }
    }
}

function main() {
    const avl = new AVLTree();

    avl.insert(3);

    avl.print();
}

main();