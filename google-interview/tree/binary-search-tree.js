class Node {
    constructor(value) {
        this.left;
        this.right;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root;
    }

    insert(value) {
        const newNode = new Node(value);
        let currentNode = this.root;
        let inserted = false;

        if(!this.root) {
            this.root = newNode;
            return;
        }

        while(!inserted) {
            
            if(value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    inserted = true;
                }
                else {
                    currentNode = currentNode.left;
                }
            }

            else if(value > currentNode.value) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    inserted = true;
                }

                else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

module.exports = BinarySearchTree;