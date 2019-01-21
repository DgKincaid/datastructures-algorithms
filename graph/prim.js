require('google-closure-library');

goog.require('goog.structs.PriorityQueue');

const AdjacencyMatrix = require('./adjacency-matrix');

function spanning_tree(graph, source) {
    let distance_table = new Map();
    let visited_vertices = new Map();
    let spanning_tree_result = new Map();

    let queue = new goog.structs.PriorityQueue();

    distance_table.set(source, { weight: 0, prev: source });

    queue.enqueue(0, source);

    while(!queue.isEmpty()) {
        let current_vertex = queue.dequeue();

        if(visited_vertices.has(current_vertex)) {
            continue;
        }

        visited_vertices.set(current_vertex);

        if(current_vertex !== source) {
            let last_vertex = distance_table.get(current_vertex).prev;
            let edge = last_vertex + '-->' + current_vertex;

            if(!spanning_tree_result.has(edge)) {
                spanning_tree_result.set(edge);
            }
        }

        for(let key of graph.get_adjacent_vertices(current_vertex)) {
            let weight = graph.get_edge_weight(current_vertex, key);
            let neighbor = distance_table.get(key);

            if(!neighbor || neighbor.weight > weight) {
                distance_table.set(key, { weight: weight, prev: current_vertex});
                queue.enqueue(weight, key);
            }
        }
    }

    for(let [key] of spanning_tree_result) {
        console.log(key);
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
    g.add_edge(5, 4, 3)
    g.add_edge(3, 6, 1)
    g.add_edge(6, 7, 1)
    g.add_edge(7, 0, 1)
    
    spanning_tree(g, 3)
}
main();