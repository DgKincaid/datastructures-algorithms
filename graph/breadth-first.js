const Queue = require('../queue/queue');

const AdjacencyMatrix = require('./adjacency-matrix');

function breadth_first(graph, start = 0) {
    let queue = new Queue();
    let visited = new Map();

    queue.enqueue(start);

    while(queue.queue.length > 0) {
        let vertex = queue.dequeue();

        if(visited.has(vertex)) {
            continue;
        }

        console.log('Visit: ', vertex);

        visited.set(vertex, true);

        for(let v of graph.get_adjacent_vertices(vertex)) {
            if(!visited.has(v)) {
                queue.enqueue(v);
            }
        }
    }
}

function main() {
    const g = new AdjacencyMatrix(9, true);

    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 7)
    g.add_edge(2, 4)
    g.add_edge(2, 3)
    g.add_edge(1, 5)
    g.add_edge(5, 6)
    g.add_edge(3, 6)
    g.add_edge(3, 4)
    g.add_edge(6, 8)
    
    // for(let i = 0; i < 9; i++) {
    //     console.log('Adjacent to: ', i, g.get_adjacent_vertices(i));
    // }

    // for(let i = 0; i < 9; i++) {
    //     console.log('Indegree: ', i, g.get_indegree(i));
    // }

    breadth_first(g, 0);
}

main();