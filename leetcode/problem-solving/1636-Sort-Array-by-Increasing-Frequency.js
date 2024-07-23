/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const obj = {};
    for(const n of nums){
        obj[n] = (obj[n] || 0) + 1;
    }
    return nums.sort((a, b) => (obj[a] - obj[b]) || (b - a));
};

