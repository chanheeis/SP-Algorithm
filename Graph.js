const util=require('util');

class Graph {
    constructor(){
        this.edges=[];
        this.nodes=[];
    }

    addNode(nodeName,marked=false){
        for(let i=0;i<this.nodes.length;i++){
            if(this.nodes[i].nodeName===nodeName) return;
        }
        this.nodes.push({nodeName,marked});
        this.edges[nodeName]=[];
    }

    addEdge(node1,node2){
        const alreadyExist=this.edges[node1].includes(node2)
        if(alreadyExist===true) return;
        this.edges[node1].push(node2);
        this.edges[node2].push(node1);
    }

    addDirectedEdge(node1,node2){
        const alreadyExist=this.edges[node1].includes(node2);
        if(alreadyExist===true) return;
        this.edges[node1].push(node2);
    }

    DFS(startNode){
        const root=this.getNode(startNode);
        console.log(`Start Node : ${root.nodeName}`);

        const stack=[];
        stack.push(root);
        root.marked=true;

        while(stack.length!==0){
            const node=stack.pop();
            const edges=this.getEdges(node.nodeName);
            edges.map(edge=>{
                const edgeNode=this.getNode(edge);
                if(edgeNode.marked===false){
                    edgeNode.marked=true;
                    stack.push(edgeNode);
                }
            })
            console.log(`${node.nodeName} -> `);  
        }
    }

    printNodes(){
        console.log(`\n Nodes : \n ${util.inspect(this.nodes,{showHidden:false,depth:null})} \n`);
    }

    printEdges(){
        console.log(`\n Edges : \n ${util.inspect(this.edges,{showHidden:false,depth:null})} \n`);
    }
 
    getNode(nodeName){
        const node=this.nodes.find(node=>{
            return node.nodeName===nodeName
        })
        return node;
    }

    getEdges(nodeName){
        const edge=this.edges[nodeName];
        return edge;
    }
}

const g=new Graph();

g.addNode("node_1")
g.addNode("node_2")
g.addNode("node_3")
g.addNode("node_4")
g.addNode("node_5")

g.addEdge("node_1","node_3");
g.addEdge("node_3","node_5");
g.addEdge("node_5","node_4");
g.addEdge("node_2","node_4");

g.printNodes();
g.printEdges();

g.DFS("node_1");

