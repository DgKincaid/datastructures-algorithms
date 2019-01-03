const Queue = require('../queue/queue');

class AdjacencyList {
    constructor() {
        this.list = new Map();
    }

    insert_undirected(fromVertex, toVertex, weight) {
        if(!this.list.has(fromVertex)) {
            this.list.set(fromVertex, [{ vertex: toVertex, weight }]);
        }
        if(!this.list.has(toVertex)) {
            this.list.set(toVertex, [{ vertex: fromVertex, weight }])
        }
        else {
            this.list.get(fromVertex).push({ vertex: toVertex, weight });
            this.list.get(toVertex).push({ vertex: fromVertex, weight });
        }
    }

    insert(fromVertex, toVertex, distance) {
        if(!this.list.has(toVertex)) {
            this.list.set(toVertex, []);
        }

        if(!this.list.has(fromVertex)) {
            this.list.set(fromVertex, [{ vertex: toVertex, distance }]);
        }
        else {
            this.list.get(fromVertex).push({ vertex: toVertex, distance });
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
            for(let vertex of values) {
                console.log(key, vertex.vertex, vertex.distance );
            }
        }
    }
}

function main() {
    const undirectedGraph = new AdjacencyList();

    undirectedGraph.insert_undirected(0, 1, 4);
    undirectedGraph.insert_undirected(0, 7, 8);
    undirectedGraph.insert_undirected(1, 2, 8);
    undirectedGraph.insert_undirected(1, 7, 11);
    undirectedGraph.insert_undirected(2, 3, 7);
    undirectedGraph.insert_undirected(2, 8, 2);
    undirectedGraph.insert_undirected(2, 5, 4);
    undirectedGraph.insert_undirected(3, 4, 9);
    undirectedGraph.insert_undirected(3, 5, 14);
    undirectedGraph.insert_undirected(4, 5, 10);
    undirectedGraph.insert_undirected(5, 6, 2);
    undirectedGraph.insert_undirected(6, 8, 6);
    undirectedGraph.insert_undirected(7, 6, 1);
    undirectedGraph.insert_undirected(7, 8, 7);

    // const directedGraph = new AdjacencyList();

    // directedGraph.insert(0, 1, 3);
    // directedGraph.insert(0, 4, 4);
    // directedGraph.insert(1, 2, 6);
    // directedGraph.insert(1, 3, 2);
    // directedGraph.insert(1, 4, 1);
    // directedGraph.insert(2, 3, 10);
    // directedGraph.insert(3, 4, 8);

    // directedGraph.printGraph();

    // directedGraph.BFT(0);

    // directedGraph.DFT(0);
    // directedGraph.DFT_Iterative(0);

    // directedGraph.BF_Search(0, 3);
}

main();