/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    const LIS = Array(nums.length).fill(1); // Longest increasing subsequence
    const LDS = Array(nums.length).fill(1); // Longest decreasing subsequence

    for(let i=0; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[i] > nums[j]){
                LIS[i] = Math.max(LIS[i], LIS[j] + 1);
            }
        }
    }

    for(let i = nums.length - 1; i>=0; i--){
        for(let j = nums.length - 1; j>i; j--){
            if(nums[i] > nums[j]){
                LDS[i] = Math.max(LDS[i], LDS[j] + 1);
            }
        }
    }

    let maxMountainLength = 0;

    for(let i=1; i<nums.length-1; i++){
        if(LIS[i] > 1 && LDS[i] > 1){
            maxMountainLength = Math.max(maxMountainLength, LIS[i] + LDS[i] - 1);
        }
    }

    return nums.length - maxMountainLength;
};