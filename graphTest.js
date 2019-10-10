const Graph=require('./Graph');
const g=new Graph();
g.addNode(["node_1","node_2","node_3","node_4","node_5","node_1"]);
g.printNodes();

g.addEdge("node_1","node_2");
g.addEdge("node_2","node_4");
g.addEdge("node_4","node_5");
g.addEdge("node_1","node_3");

g.printEdges();

g.DFS("node_3");
g.DFS("node_2");
g.DFS();
g.BFS();