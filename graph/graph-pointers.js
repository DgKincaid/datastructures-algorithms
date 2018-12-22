class Node {
    constructor(data){
        this.nodes = [];
        this.data = data;
    }
}

class PointerGraph {
    constructor() {
        //Consider using a hashmap
        this.graph = [];
    }

    insert_undirected(u, v) {
        let uIndex = this.graph.map(e => e.data).indexOf(u);

        let vIndex = this.graph.map(e => e.data).indexOf(v);

        if(uIndex === -1) {
            const uNode = new Node(u);
            
            uIndex = this.graph.push(uNode) - 1;
            
        }
        if(vIndex === -1) {
            const vNode = new Node(v);

            vIndex = this.graph.push(vNode) - 1;
        }

        
        this.graph[uIndex].nodes.push(this.graph[vIndex]);
        this.graph[vIndex].nodes.push(this.graph[uIndex]);
    }

    printGraph() {
        this.graph.forEach((node) => {
            let relationship = node.data;
            node.nodes.forEach((item) => {
                relationship = relationship + '-->' + item.data;
            })

            console.log(relationship);
        })
    }
}

function main() {
    const undirectedGraph = new PointerGraph();

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