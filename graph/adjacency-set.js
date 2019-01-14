const Graph = require('./graph');

class Node {
    constructor(vertexId) {
        this.vertexId = vertexId;
        this.adjacency_set = new Map();
    }

    add_edge(v, weight){
        if(this.vertexId === v) {
            throw new RangeError(`The vertex ${v} cannot be adjacent to itself.`)
        }

        this.adjacency_set.set(v, weight);
    }

    get_adjacent_vertices() {
        return this.adjacency_set;
    }
}

class AdjacencySet extends Graph {
    constructor(numVertices, directed = false) {
        super(numVertices, directed);

        this.vertex_list = new Map();
    }

    add_edge(v1, v2, weight=1){
        if(v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
            throw new RangeError(`Vertices ${v1} or ${v2} are out of bounds`);
        }

        if(weight < 1){
            throw new RangeError(`An edge cannot have weight < 1`);
        }

        if(!this.vertex_list.has(v1)){
            this.vertex_list.set(v1, new Node(v1));
        }

        if(!this.vertex_list.has(v2)){
            this.vertex_list.set(v2, new Node(v2));
        }

        this.vertex_list.get(v1).add_edge(v2, weight);

        if(!this.directed) {
            this.vertex_list.get(v2).add_edge(v1, weight);
        }
    }

    get_adjacent_vertices(v) {
        if(v < 0 || v >= this.numVertices) {
            return new RangeError(`Cannot access vertex ${v}`)
        }

        return this.vertex_list.get(v).get_adjacent_vertices();
    }

    get_indegree(v){
        let indegree = 0;

        if(v < 0 || v >= this.numVertices) {
            return new RangeError(`Cannot access vertex ${v}`)
        }

        for(let i = 0; i < this.numVertices; i++){
            if(this.get_adjacent_vertices(i).has(v)) {
                indegree++;
            }        
        }

        return indegree;
    }

    get_edge_weight(v1, v2){
        return this.vertex_list.get(v1).get_adjacent_vertices().get(v2);
    }

    display() {
        for(let i = 0; i < this.numVertices; i++) {
            for(let v of this.get_adjacent_vertices(i)) {
                console.log(i, '-->', v);
            }
        }
    }
}

function main() {
    const g = new AdjacencySet(9);

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

    for(let i = 0; i < 9; i++) {
        console.log('Adjacent to: ', i, g.get_adjacent_vertices(i));
    }

    for(let i = 0; i < 9; i++) {
        console.log('Indegree: ', i, g.get_indegree(i));
    }
    
    g.display();
}

module.exports = AdjacencySet;