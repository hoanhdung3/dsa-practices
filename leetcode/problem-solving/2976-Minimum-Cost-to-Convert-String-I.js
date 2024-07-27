/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const getIndex = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0);
    const minCost = Array.from({length: 26}, () => Array(26).fill(Infinity));
 
    for(let i=0; i<26; i++){
         minCost[i][i] = 0;
    }
 
    for(let i=0; i<original.length; i++){
         const from = getIndex(original[i]);
         const to = getIndex(changed[i]);
         if(from == to) continue;
         minCost[from][to] = Math.min(cost[i], minCost[from][to]); // Multiple pairs with different const
    }
 
    for(let k=0; k<26; k++){
         for(let i=0; i<26; i++){
             for(let j=0; j<26; j++){
                 if(minCost[i][j] > minCost[i][k] + minCost[k][j]){
                     minCost[i][j] = minCost[i][k] + minCost[k][j];
                 }
             }
         }
    }
 
    let ans = 0;
    for(let i=0; i<source.length; i++){
         const from = getIndex(source[i]);
         const to = getIndex(target[i]);
         if(minCost[from][to] === Infinity) return -1;
         ans += minCost[from][to];
    }
    return ans;
 };