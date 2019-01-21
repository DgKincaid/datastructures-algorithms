require('google-closure-library');

goog.require('goog.structs.PriorityQueue');

const AdjacencyMatrix = require('./adjacency-matrix');

function spanning_tree(graph) {
    let queue = new goog.structs.PriorityQueue();
    let visited_vertices = new Map();
    let spanning_tree = new Map();
    let num_edges = 0;

    for(let i = 0; i < graph.numVertices; i++) {
        for(let neighbor of graph.get_adjacent_vertices(i)){
            let weight = graph.get_edge_weight(i, neighbor);
            queue.enqueue(weight, [ i, neighbor ]);
        }
    }

    for(let i = 0; i < graph.numVertices; i++) {

    }

    while(!queue.isEmpty() && num_edges < (graph.numVertices-1)) {
        let [v1, v2] = queue.dequeue();
        let vertex_pair = [v1, v2].sort();
        let tempMap = new Map();

        console.log(v1, v2);

        if(spanning_tree.has(v2)) {
            if(spanning_tree.get(v2).has(v1)) {
                continue;
            }
        }

        if(has_cycle(spanning_tree)) {
            spanning_tree.get(vertex_pair[0]).delete(vertex_pair[1]);
            continue;
        }

        spanning_tree.get(vertex_pair[0]).set(vertex_pair[1]);

        num_edges = num_edges + 1;
        visited_vertices.set(v1);
        visited_vertices.set(v2);
    }
}

function has_cycle(spanning_tree) {
    for(let [key, value] of spanning_tree) {
        let q = [];
        q.push(key);
    }
}

function main() {

    let g = new AdjacencyMatrix(8, directed=false)

    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(1, 3, 2)
    g.add_edge(2, 3, 2)
    g.add_edge(1, 4, 3)
    g.add_edge(3, 5, 1)
    g.add_edge(5, 4, 2)
    g.add_edge(3, 6, 1)
    g.add_edge(6, 7, 1)
    g.add_edge(7, 0, 1)

    spanning_tree(g)
}

main();