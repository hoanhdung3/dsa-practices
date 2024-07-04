/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    // O(nlogn)
    if(nums.length <= 4) return 0;
    let sortedNums = nums.sort((a, b) => a - b);
    let res = Number.MAX_SAFE_INTEGER;
    for(let l=0; l<4; l++){
        r = sortedNums.length - 4 + l; // +l to shift the r when l moved by 1
        res = Math.min(res, sortedNums[r] - sortedNums[l]);
    }
    return res;
};

