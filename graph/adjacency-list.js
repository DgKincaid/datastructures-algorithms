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
        if(!this.list.has(fromVertex)) {
            this.list.set(fromVertex, [ toVertex ]);
        }
        else {
            this.list.get(fromVertex).push(toVertex);
        }
    }

    BFS(startVertex) {

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

    directedGraph.printGraph();
}

main();