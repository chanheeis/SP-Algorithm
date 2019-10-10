const util=require('util');
class Graph {
    constructor(){
        this.edges=[];
        this.nodes=[];
    }

    addNode(nodeArr,marked=false){
        for(let i=0;i<nodeArr.length;i++){
            if(this.nodes.length===0){
                this.nodes.push({nodeName:nodeArr[i],marked});
                this.edges[nodeArr[i]]=[];
            } 
            for(let j=0,len=this.nodes.length;j<len;j++){
                if(this.nodes[j].nodeName===nodeArr[i]) break;
                if(j===len-1){
                    this.nodes.push({nodeName:nodeArr[i],marked});
                    this.edges[nodeArr[i]]=[];
                } 
            }
        }
    }

    initializeNode(){
        this.nodes.map(node=>{
            node.marked=false
        });
    };

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

    DFS(startNode=this.nodes[0].nodeName){
        this.initializeNode();
        process.stdout.write("START -> ");
        const root=this.getNode(startNode);
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
            process.stdout.write(" "+node.nodeName+" ->");  
        }
        process.stdout.write(" END\n");

    }
    BFS(startNode=this.nodes[0].nodeName){
        this.initializeNode();
        process.stdout.write("START -> ");
        const root=this.getNode(startNode);
        const queue=[];
        queue.push(root);
        root.marked=true;

        while(queue.length!==0){
            const node=queue.shift();
            const edges=this.getEdges(node.nodeName);
            edges.map(edge=>{
                const edgeNode=this.getNode(edge);
                if(edgeNode.marked===false){
                    edgeNode.marked=true;
                    queue.push(edgeNode);
                }
            })
            process.stdout.write(" "+node.nodeName+" ->");
        }
        process.stdout.write(" END\n");
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

module.exports=Graph;


