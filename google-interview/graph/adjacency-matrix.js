const Graph = require('./graph');

class AdjacencyMatrix extends Graph {
    constructor(numVertices, directed=false){
        super(numVertices, directed);

        this.matrix = [];

        for(let i = 0; i < numVertices; i++){
            this.matrix[i] = [];
        }
        for(let i = 0; i < this.matrix.length; i++){
            for(let j = 0; j < this.numVertices; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    add_edge(v1, v2, weight=1) {
        if(v1 >= this.numVertices || v2 >= this.numVertices || v1 < 0 || v2 < 0) {
            throw new RangeError(`Vertices ${v1} and ${v2} are out of bounds`);
        }
        if(weight < 1) {
            throw new RangeError('An edge cannot have weight < 1');
        }

        this.matrix[v1][v2] = weight;

        if(!this.directed) {
            this.matrix[v2][v1] = weight;
        }
    }

    get_adjacent_vertices(v) {
        let adjacent_vertices = [];

        if(v < 0 || v >= this.numVertices) {
            throw new RangeError('Cannot access vertex ', v);
        }

        for(let i = 0; i < this.numVertices; i++){
            if(this.matrix[v][i] > 0){
                adjacent_vertices.push(i);
            }
        }

        return adjacent_vertices;
    }

    get_indegree(v) {
        let indegree = 0;

        if(v < 0 || v >= this.numVertices) {
            throw new RangeError('Cannot access vertex ', v);
        }

        for(let i = 0; i < this.numVertices; i++) {
            if(this.matrix[i][v]) {
                indegree++;
            }
        }

        return indegree;
    }

    get_edge_weight(v1, v2) {
        return this.matrix[v1][v2];
    }

    display() {
        for(let i = 0; i < this.numVertices; i++){
            for(let v of this.get_adjacent_vertices(i)){
                console.log(i, `-->`, v);
            }
        }
    }
}

module.exports = AdjacencyMatrix;

function main() {
    const g = new AdjacencyMatrix(9);

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

    // g.display();
}

// main();