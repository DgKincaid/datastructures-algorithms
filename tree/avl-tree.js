const Queue = require('../queue/queue');

class Node {
    constructor(value) {
        this.right;
        this.left;

        this.value = value;
        this.height;
    }
}

class AVLTree {
    constructor() {
        this.root;
    }

    insert(value) {
        const unvisitedNodes = new Queue();
        const newNode = new Node(value);

        let next;
        let last;

        if (!this.root) {

            this.root = newNode;
        }
        else {
            next = this.root;

            while (next) {
                last = next;

                if (value < next.value) {
                    next = next.left;
                }
                else if (value > next.value) {
                    next = next.right;
                }
                else if (value === next.value) {
                    // Same value will decide what to do later
                }
            }

            if (value < last.value) {
                last.left = newNode;
            }
            if (value > last.value) {
                last.right = newNode;
            }
        }

        this.balance();
    }

    leftRight_Rotate(node) {
        return node;
    }

    leftLeft_Rotate(node) {
        return node;
    }

    rightLeft_Rotate(node) {
        return node;
    }

    rightRight_Rotate(node) {
        return node;
    }

    balance() {
        let newRoot = null;
        newRoot = this.balanceNode(this.root);

        // if(this.root != newRoot) {
        //     this.root = newRoot;
        // }
    }

    balanceNode(node) {
        let newRoot = null;

        if(node.left) {
            this.balanceNode(node.left);
        }
        if(node.right) {
            this.balanceNode(node.right);
        }

        let factor = this.balanceFactor(node);

        //Left Heavy
        if (factor >= 2) {
            if(this.balanceFactor(node.left) <= -1) {
                this.leftRight_Rotate(node);
            }
            else {
                this.leftLeft_Rotate(node)
            }
        }
        // right heavy
        else if(factor <= -2) {
            if(this.balanceFactor(node.right) >= 1) {
                this.rightLeft_Rotate(node);
            }
            else {
                this.rightRight_Rotate(node);
            }
        }

        // return node;
    }

    balanceFactor(node) {
        let bf = 0;

        if(node.left) {
            bf += this.nodeHeight(node.left);
        }
        if(node.right) {
            bf -= this.nodeHeight(node.right);
        }

        return bf;
    }

    nodeHeight(node) {
        let heightLeft = 0;
        let heightRight = 0;

        if(node.left) {
            heightLeft = this.nodeHeight(node.left);
        }
        if(node.right) {
            heightRight = this.nodeHeight(node.right);
        }

        return heightRight > heightLeft ? ++heightRight : ++heightLeft;
    }
}

function main() {
    let avl = new AVLTree();
    let values = [5,4,6,12,3,9,10,7];

    for(let i = 0; i < values.length; i++) {
        avl.insert(values[i]);
    }

    console.log(JSON.stringify(avl));
}   

main();