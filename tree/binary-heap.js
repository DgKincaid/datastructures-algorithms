const Queue = require('../queue/queue.js');

class Node {
    constructor() {
        this.left = null;
        this.right = null;

        this.value;
    }
}

class BinaryMinHeap {
    constructor() {
        this.root;
    }

    insert(value) {
        const queue = new Queue();
        const newNode = new Node();
        let parent;

        newNode.value = value;

        if(!this.root) {
            this.root = newNode;
        }
        else {
            //console.log(this.root);
            queue.enqueue(this.root);
        }

        while(queue.queue.length > 0) {
            const node = queue.dequeue();
            parent = node;
            //console.log(node);
            if (!node.left) {
                node.left = newNode;
            }
            else if(!node.right) {
                node.right = newNode;
            }
            else {
                queue.enqueue(node.left);
                queue.enqueue(node.right);
            }
        }

        console.log(parent);
    }
}

module.exports = { BinaryMinHeap }