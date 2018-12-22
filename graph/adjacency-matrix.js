class AdjacencyMatrix {
    constructor() {
        this.matrix = new Array();
    }

    insert_undirected(i, j) {
        if(!this.matrix[i]) {
            this.matrix[i] = [];
        }
        if(!this.matrix[j]) {
            this.matrix[j] = [];
        }
        this.matrix[i][j] = 1;
        this.matrix[j][i] = 1;
    }

    printGraph() {
        this.matrix.forEach((item) => {
            let row = '';
            
            for(let i = 0; i < item.length; i++) {
                if(item[i]) {
                    row = row + ' ' + item[i];
                }
                else {
                    row = row + ' 0';
                }
            }

            console.log(row);
        })
    }
}

function main() {
    const undirectedGraph = new AdjacencyMatrix();

    undirectedGraph.insert_undirected(0, 1);
    undirectedGraph.insert_undirected(0, 4);
    undirectedGraph.insert_undirected(1, 2);
    undirectedGraph.insert_undirected(1, 3);
    undirectedGraph.insert_undirected(1, 4);
    undirectedGraph.insert_undirected(2, 3);
    undirectedGraph.insert_undirected(3, 4);

    undirectedGraph.printGraph();
}

main();