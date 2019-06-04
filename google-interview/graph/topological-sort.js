const Queue = require('../queue/queue');

const AdjacencyMatrix = require('./adjacency-matrix');

function topological_sort(graph) {
    let queue = new Queue();
    let indegreeMap = new Map();
    let sortedList = [];

    for(let i = 0; i < graph.numVertices; i++) {
        indegreeMap.set(i, graph.get_indegree(i));

        if(indegreeMap.get(i) === 0){
            queue.enqueue(i);
        }
    }

    while(queue.queue.length > 0) {
        let vortex = queue.dequeue();

        sortedList.push(vortex);

        for(let v of graph.get_adjacent_vertices(vortex)) {

            indegreeMap.set(v, indegreeMap.get(v) - 1);

            if(indegreeMap.get(v) === 0) {
                queue.enqueue(v);
            }
        }
    }

    if(sortedList.length != graph.numVertices) {
        throw new Error('Graph contains a cycle')
    }

    console.log(sortedList);
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

    topological_sort(g);
}

main();