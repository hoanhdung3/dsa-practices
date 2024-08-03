/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if(target.length !== arr.length) return false;
    const sortedTarget = target.sort();
    const sortedArr = arr.sort();
    for(let i=0; i<sortedTarget.length; i++){
        if(sortedTarget[i] !== sortedArr[i]) return false;
    }
    return true;
};