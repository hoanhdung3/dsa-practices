/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let ones = 0;
    for(const num of nums){
        ones += num;
    }

    if(ones === 0 || ones === nums.length) return 0;

    let currentOnes = 0;
    for(let i=0; i<ones; i++){ // Count 1's in the first window size ones
        currentOnes += nums[i];
    }

    let maxOnes = currentOnes; 
    for(let i=0; i<nums.length; i++){
        currentOnes -= nums[i];
        currentOnes += nums[(i + ones) % nums.length];
        maxOnes = Math.max(maxOnes, currentOnes);
    }

    return ones - maxOnes;

};