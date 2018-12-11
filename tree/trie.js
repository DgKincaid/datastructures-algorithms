class Node {
    constructor(value){
        this.children = [];
        this.value = value;
    }
}

class TrieTree {
    constructor() {
        this.root = new Node(null);
    }

    insert(value) {
        const arr = value.split('');
        let current = this.root;

        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);

            console.log(current);
            let index = current.children.indexOf(arr[i]);

            if(index === -1) {
                index = current.children.push(new Node(arr[i]));
            }
            
            
            console.log(current);
        }
    }
}

function main() {
    const trie = new TrieTree();

    trie.insert('h');

    console.log(trie);
}

main();