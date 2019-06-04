class Graph {
    constructor(numVertices, directed=false){
        this.numVertices = numVertices;
        this.directed = directed;

        if(this.add_edge === undefined) {
            throw new TypeError('add_edge');
        }

        if(this.get_adjacent_vertices === undefined) {
            throw new TypeError('get_adjacent_vertices');
        }

        if(this.get_indegree === undefined) {
            throw new TypeError('get_indegree');
        }

        if(this.get_edge_weight === undefined) {
            throw new TypeError('get_edge_weight');
        }

        if(this.display === undefined){
            throw new TypeError('display');
        }
    }
}


module.exports = Graph;
