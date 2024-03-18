const DFS = (graph, startNode, depth = 0) => {
    let answer = 0;
    let maxDepth = 0;
    let maxDepthCount = 0; // Initialize maxDepthCount
    const visited = [];
    let needVisit = [];

    needVisit.push({ node: startNode, depth });

    while (needVisit.length !== 0) {
        const { node, depth } = needVisit.shift();
        if (!visited.includes(node)) {
            visited.push(node);

            if (maxDepth < depth) {
                maxDepth = depth;
                maxDepthCount = 1;
            } else if (maxDepth === depth) {
                maxDepthCount++;
            }
            needVisit = [
                ...needVisit,
                ...graph[node].filter((adjNode) => !visited.includes(adjNode)).map((e) => ({ node: e, depth: depth + 1 })),
            ];
        }
    }
    return maxDepthCount;
};

const solution = (n, vertex) => {
    const graph = new Array(n + 1).fill(null).map(() => []);

    for (let i = 0; i <= n; i++) {
        graph[i] = [];
    }

    vertex.forEach((e) => {
        const [node1, node2] = e;

        if (node1 <= n && node2 <= n) {
            graph[node1].push(node2);
            graph[node2].push(node1);
        }
    });

    return DFS(graph, 1);
};