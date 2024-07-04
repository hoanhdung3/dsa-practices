/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counter = new Map();

    nums.forEach(num => {
        counter.set(num, (counter.get(num) || 0) + 1);
    });
    let sortedArr = Array.from(counter.entries()).sort((a, b) => {
        return b[1] - a[1];
    });
    return sortedArr.slice(0, k).map(entry => entry[0]);


};