const Queue = require('../queue/queue');

class AdjacencyList {
    constructor() {
        this.list = new Map();
    }

    insert_undirected(fromVertex, toVertex) {
        if(!this.list.has(fromVertex)) {
            this.list.set(fromVertex, [ toVertex ]);
        }
        if(!this.list.has(toVertex)) {
            this.list.set(toVertex, [fromVertex])
        }
        else {
            this.list.get(fromVertex).push(toVertex);
            this.list.get(toVertex).push(fromVertex);
        }
    }

    insert(fromVertex, toVertex) {
        if(!this.list.has(toVertex)) {
            this.list.set(toVertex, []);
        }

        if(!this.list.has(fromVertex)) {
            this.list.set(fromVertex, [ toVertex ]);
        }
        else {
            this.list.get(fromVertex).push(toVertex);
        }
    }

    BFT(startVertex) {
        let visited = new Map();
        let queue = new Queue();

        queue.enqueue(startVertex);
        visited.set(startVertex);

        while(queue.queue.length > 0) {
            const current = queue.dequeue();

            console.log(current);

            for(let i of this.list.get(current)) {
                if(!visited.has(i)) {
                    queue.enqueue(i);
                    visited.set(i);
                }
            }
        }
    }

    BF_Search(startVertex, find) {
        let visited = new Map();
        let queue = new Queue();

        queue.enqueue(startVertex);
        visited.set(startVertex);

        while(queue.queue.length > 0) {
            const current = queue.dequeue();

            console.log(current);

            if(current === find) {
                return this.list.get(current);
            }
            for(let i of this.list.get(current)) {
                if(!visited.has(i)) {
                    queue.enqueue(i);
                    visited.set(i);
                }
            }
        }
    }
    DFT(startVertex) {
        let visited = new Map();

        this.DFTUtil(startVertex, visited);
    }
    
    DFTUtil(current, visited) {
        visited.set(current);

        console.log(current);

        for(let i of this.list.get(current)) {
            if(!visited.has(i)) {
                this.DFTUtil(i, visited);
            }
        }
    }

    DFT_Iterative(startVertex) {
        let visited = new Map();
        let stack = [];

        stack.push(startVertex);
        visited.set(startVertex);

        while(stack.length > 0) {
            let current = stack.pop();

            console.log(current);
            for(let i of this.list.get(current)) {
                if(!visited.has(i)) {
                    stack.push(i);
                    visited.set(i);
                }
            }
        }
    }

    printGraph() {
        for(let [key, values] of this.list) {
            console.log(key, values);
        }
    }
}

function main() {
    const undirectedGraph = new AdjacencyList();

    undirectedGraph.insert_undirected(0, 1);
    undirectedGraph.insert_undirected(0, 4);
    undirectedGraph.insert_undirected(1, 2);
    undirectedGraph.insert_undirected(1, 3);
    undirectedGraph.insert_undirected(1, 4);
    undirectedGraph.insert_undirected(2, 3);
    undirectedGraph.insert_undirected(3, 4);

    const directedGraph = new AdjacencyList();

    directedGraph.insert(0, 1);
    directedGraph.insert(0, 4);
    directedGraph.insert(1, 2);
    directedGraph.insert(1, 3);
    directedGraph.insert(1, 4);
    directedGraph.insert(2, 3);
    directedGraph.insert(3, 4);

    // directedGraph.printGraph();

    // directedGraph.BFT(0);

    // directedGraph.DFT(0);
    // directedGraph.DFT_Iterative(0);

    directedGraph.BF_Search(0, 3);
}

main();