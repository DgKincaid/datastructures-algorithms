require('google-closure-library');

goog.require('goog.structs.PriorityQueue');

const AdjacencySet = require('./adjacency-set')

function build_distance_table(graph, source) {
    let distance_table = new Map();
    let priority_queue = new goog.structs.PriorityQueue();

    distance_table.set(source, { distance: 0, prev: source })
    priority_queue.enqueue(0, source);

    while(!priority_queue.isEmpty()) {
        let current_vertex = priority_queue.dequeue();
        let current_distance = distance_table.get(current_vertex).distance;

        for(let [key] of graph.get_adjacent_vertices(current_vertex)) {
            let distance = current_distance + graph.get_edge_weight(current_vertex, key);
            let neighbor = distance_table.get(key);
            
            if(!neighbor || neighbor.distance > distance) {
                distance_table.set(key, { distance: distance, prev: current_vertex });
                priority_queue.enqueue(distance, key)
            }
        }
    }

    return distance_table;
}

function shortest_path(graph, source, destination) {
    let distance_table = build_distance_table(graph, source);
    let path = [destination];
    let previous_vertex = null;

    if(distance_table.has(destination)) {
        previous_vertex = distance_table.get(destination).prev;
    }

    while (previous_vertex && previous_vertex !== source) {
        path.unshift(previous_vertex);
        previous_vertex = distance_table.get(previous_vertex).prev;
    }

    if(previous_vertex !== source) {
        console.log(`There is no path from ${source} to ${destination}`)
    }
    else {
        path.unshift(source);
        console.log('Shortest path is: ', path);
    }
}

function main() {
    let g = new AdjacencySet(8, directed=true)

    g.add_edge(0, 1, 1)
    g.add_edge(1, 2, 2)
    g.add_edge(1, 3, 6)
    g.add_edge(2, 3, 2)
    g.add_edge(1, 4, 3)
    g.add_edge(3, 5, 1)
    g.add_edge(5, 4, 5)
    g.add_edge(3, 6, 1)
    g.add_edge(6, 7, 1)
    g.add_edge(0, 7, 8)
    
    shortest_path(g, 0, 6)
    
    shortest_path(g, 4, 7)
    
    shortest_path(g, 7, 0)
}

main();