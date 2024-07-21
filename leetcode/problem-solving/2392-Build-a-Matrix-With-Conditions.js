/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    const topSort = (conditions) => {
        // Build graph
        const graph = {};
        const inDegree = new Array(k + 1).fill(0);
        for(const [src, dest] of conditions){
            if(src in graph === false){
                graph[src] = [];
            }
            graph[src].push(dest);
            inDegree[dest]++;
        }

        // Top sort
        let queue = [];
        let ordering = [];

        for(let i=1; i<=k; i++){
            if(inDegree[i] === 0){
                queue.push(i);
            }
        }

        while(queue.length){
            const v = queue.shift();
            ordering.push(v);

            if(v in graph === false) continue;
            for(const nei of graph[v]){
                if(--inDegree[nei] === 0){
                    queue.push(nei);
                }
            }
        }

        return ordering;
    }

    const rowOrdering = topSort(rowConditions);
    const colOrdering = topSort(colConditions);

    // Cycle detected
    if(rowOrdering.length < k || colOrdering.length < k) return [];

    const rowMap = new Map(rowOrdering.map((val, index) => [val, index]));
    const colMap = new Map(colOrdering.map((val, index) => [val, index]));
    const res = new Array(k).fill(0).map(() => new Array(k).fill(0));

    for(let i=1; i<=k; i++){
        res[rowMap.get(i)][colMap.get(i)] = i;
    }

    return res;
};