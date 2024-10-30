/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(m * n !== original.length) return [];
    const res = Array.from({ length: m }, () => Array(n).fill(0));

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            res[i][j] = original[i * n + j];
        }
    }
    return res;
};