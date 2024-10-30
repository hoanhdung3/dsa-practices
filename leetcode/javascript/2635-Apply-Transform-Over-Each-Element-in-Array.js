/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = Array(arr.length).fill(0);
    for(let i=0; i<arr.length; i++){
        res[i] = fn(arr[i], i);
    }
    return res;
};