class Graph {
    constructor(){
        this.edges={};
        this.nodes=[];
    }

    addNode(node){
        if(!this.nodes.includes(node)){
            this.nodes.push(node);
            this.edges[node]=[];    
        }
        console.log(this.nodes, this.edges);
    }

    addEdge(node1,node2){
        this.edges[node1].push({node:node2});
        this.edges[node2].push({node:node1});
        console.log(this.edges);
    }

    addDirectedEdge(node1,node2){
        this.edges[node1].push({node:node2});
        console.log(this.edges);
    }
}

//중복된 간선을 피하는 로직 설계해야 함
const g=new Graph();

g.addNode("node_1")
g.addNode("node_1")
g.addNode("node_1")
g.addNode("node_2")
g.addNode("node_3")
g.addNode("node_4")
g.addNode("node_5")

g.addEdge("node_1","node_2");
g.addEdge("node_1","node_4");

