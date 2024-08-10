/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const parent = Array.from({ length: 4 * n * n }, (_, i) => i);
    const rank = Array(4 * n * n).fill(0);

    // Find with path compression
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // Union with union by rank
    function unite(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const base = 4 * (i * n + j);
            const c = grid[i][j];

            // Connect the parts inside the current cell
            if (c === '/') {
                unite(base, base + 3);
                unite(base + 1, base + 2);
            } else if (c === '\\') {
                unite(base, base + 1);
                unite(base + 2, base + 3);
            } else {
                unite(base, base + 1);
                unite(base + 1, base + 2);
                unite(base + 2, base + 3);
            }

            // Connect with the right cell
            if (j + 1 < n) {
                unite(base + 1, base + 7);
            }

            // Connect with the cell below
            if (i + 1 < n) {
                unite(base + 2, base + 4 * n);
            }
        }
    }

    // Count distinct regions
    let regions = 0;
    for (let i = 0; i < 4 * n * n; i++) {
        if (find(i) === i) regions++;
    }
    return regions;
};