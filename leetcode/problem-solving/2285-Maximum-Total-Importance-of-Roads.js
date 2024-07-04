/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

// Using map
var maximumImportance = function(n, roads) {
    let map = new Map();
    for(let arr of roads){
        let value1 = map.get(arr[0]) ? map.get(arr[0]) + 1 : 1;
        let value2 = map.get(arr[1]) ? map.get(arr[1]) + 1 : 1;
        map.set(arr[0], value1);
        map.set(arr[1], value2);
    }
    let sortedMap = new Map([...map.entries()].sort((a, b) => {
        return b[1] - a[1];
    }));
    
    let result = 0;
    sortedMap.forEach((k, v) => {
        result += k * n;
        n--;
    });
    return result;
};

console.log(maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]));

// Using Arr
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let countArr = new Array(n).fill(0);
    for(let [a, b] of roads){
        countArr[a]++;
        countArr[b]++;
    }
    countArr.sort((a,b) => b - a);
    
    let result = 0;
    countArr.forEach(c => {
        result += c * n;
        n--;
    });
    return result;
};