const Queue = require('../queue/queue');

class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.data = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        const unvisitedNodes = new Queue();
        const newNode = new Node(value);
        unvisitedNodes.enqueue(this.root);

        while(unvisitedNodes.queue.length > 0) {
            const current = unvisitedNodes.dequeue();
            if(!current.left) {
                current.left = newNode;
                return;
            }
            else if(!current.right) {
                current.right = newNode;
                return;
            }
            else {
                unvisitedNodes.enqueue(current.left);
                unvisitedNodes.enqueue(current.right);
            }
        }
    }

    print() {
        const unvisitedNodes = new Queue();
        unvisitedNodes.enqueue(this.root);

        while(unvisitedNodes.queue.length > 0) {
            const current = unvisitedNodes.dequeue();
            if(current.left) {
                unvisitedNodes.enqueue(current.left);
            }
            if(current.right) {
                unvisitedNodes.enqueue(current.right);
            }
            console.log(current.data);
        }
    }

    find_BFT(value) {
        const unvisited = new Queue();
        unvisited.enqueue(this.root);

        while(unvisited.queue.length > 0) {
            const current = unvisited.dequeue();

            if(current.data === value) {
                return current;
            }
            else if(current.left) {
                unvisited.enqueue(current.left);
            }
            else if (current.right) {
                unvisited.enqueue(current.right);
            }
        }
    }

    find_DFT(value) {
        const unvisited = []; //Stack
        unvisited.push(this.root);

        while(unvisited.length > 0){
            let current = unvisited.pop();
            console.log(current.data);
            if (current.right) {
                unvisited.push(current.right);
            }
            if(current.left) {
                unvisited.push(current.left);
            }
        }
    }

    inorder(node) {
        if(node === null) {
            return;
        }

        this.inorder(node.left);

        console.log(node.data);

        this.inorder(node.right);
    }

    preorder(node) {
        if(node === null) {
            return;
        }

        console.log(node.value);

        this.inorder(node.left);

        this.inorder(node.right);
    }

    postorder(node) {
        if(node === null) {
            return;
        }

        this.inorder(node.left);

        this.inorder(node.right);

        console.log(node.value);
    }
}

function main() {
    let avl = new BinaryTree();
    let values = [5,4,6,12,3,9,10,7];

    for(let i = 0; i < values.length; i++) {
        avl.insert(values[i]);
    }

    console.log(JSON.stringify(avl));
    // avl.inorder(avl.root);
    avl.find_DFT(2);
}

main();