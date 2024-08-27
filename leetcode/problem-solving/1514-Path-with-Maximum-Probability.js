/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const graph = new Array(n).fill(null).map(x => []);
    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push([edges[i][1], succProb[i]]);
        graph[edges[i][1]].push([edges[i][0], succProb[i]]);
    }

    
    const d = new Array(n).fill(0);
    d[start_node] = 1;

    const pq = new MaxPriorityQueue({ priority: (x) => x[0] });
    pq.enqueue([1, start_node]);

    const visited = new Set();

    while (!pq.isEmpty()) {
        const [prob, node] = pq.dequeue().element;
        
        if (visited.has(node)) continue;
        visited.add(node);

        for (const [nei, neiProb] of graph[node]) {
            const newProb = prob * neiProb;
            if (newProb > d[nei]) {
                d[nei] = newProb;
                pq.enqueue([newProb, nei]);
            }
        }
    }

    return d[end_node];
};