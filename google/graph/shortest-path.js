const Queue = require('../queue/queue');

const AdjacencySet = require('./adjacency-set');

function build_distance_table(graph, source) {
    let distance_table = new Map();
    let queue = new Queue();

    distance_table.set(source, { distance: 0, prev: source });

    queue.enqueue(source);

    while(queue.queue.length > 0) {
        let current_vertex = queue.dequeue();
        let current_distance = distance_table.get(current_vertex).distance;

        for(let [key] of graph.get_adjacent_vertices(current_vertex)) {
            if(!distance_table.has(key)){
                distance_table.set(key, {distance: current_distance+1, prev: current_vertex});

                if(graph.get_adjacent_vertices(key).size > 0) {
                    queue.enqueue(key);
                }
            }
        }
    }

    return distance_table;
}

function shortest_path(graph, source, destination) {
    const distance_table = build_distance_table(graph, source);

    let path = [destination];
    let previous_vertex = null;

    if(distance_table.has(destination)){
        previous_vertex = distance_table.get(destination).prev;
    }

    while(previous_vertex && previous_vertex !== source) {
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
    const g = new AdjacencySet(8, true);

    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(1, 3)
    g.add_edge(2, 3)
    g.add_edge(1, 4)
    g.add_edge(3, 5)
    g.add_edge(5, 4)
    g.add_edge(3, 6)
    g.add_edge(6, 7)
    g.add_edge(0, 7)
    
    // for(let i = 0; i < 9; i++) {
    //     console.log('Adjacent to: ', i, g.get_adjacent_vertices(i));
    // }

    // for(let i = 0; i < 9; i++) {
    //     console.log('Indegree: ', i, g.get_indegree(i));
    // }

    shortest_path(g, 0, 5)

    shortest_path(g, 0, 6)

    shortest_path(g, 7, 4)
}

main();