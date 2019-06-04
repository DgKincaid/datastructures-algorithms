const AdjacencyMatrix = require('./adjacency-matrix');

function depth_first(graph, visited, current=0) {
    if(visited.has(current)) {
        return;
    }

    visited.set(current, true);
    console.log('Visit: ', current);

    for(let vertex of graph.get_adjacent_vertices(current)) {
        depth_first(graph, visited, vertex);
    }
}

function main() {
    const g = new AdjacencyMatrix(9, true);
    let visited = new Map();
    
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 7)
    g.add_edge(2, 4)
    g.add_edge(2, 3)
    g.add_edge(1, 5)
    g.add_edge(5, 6)
    g.add_edge(6, 3)
    g.add_edge(3, 4)
    g.add_edge(6, 8)
    
    // for(let i = 0; i < 9; i++) {
    //     console.log('Adjacent to: ', i, g.get_adjacent_vertices(i));
    // }

    // for(let i = 0; i < 9; i++) {
    //     console.log('Indegree: ', i, g.get_indegree(i));
    // }

    depth_first(g, visited);
}

main();