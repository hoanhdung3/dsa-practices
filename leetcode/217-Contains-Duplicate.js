/**
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n^2) solution:
var containsDuplicate = function(nums) {
    let sortedNums = nums.sort();
    for(let i = 0; i < (sortedNums.length - 1); i++){
        if(sortedNums[i] == sortedNums[i + 1]){
            return true;
        }
    }
    return false;
};

// using set data structure O(n) solution:
var containsDuplicate2 = function(nums) {
    let setNums = new Set();
    for(let i = 0; i < nums.length; i++){
        if(setNums.has(nums[i])){
            return true;
        }else{
            setNums.add(nums[i]);
        }
    }
    return false;
};
