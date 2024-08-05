/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MOD = 10**9 + 7
    let sumArr = [];
    for(let i=0; i<n; i++){
        sumArr.push(nums[i]);
        let tmpSum = nums[i];
        for(let j=i+1; j<n; j++){
            tmpSum += nums[j];
            sumArr.push(tmpSum);
        }
    }
    sumArr = sumArr.sort((a, b) => a - b);
    let ans = 0;
    for(let i=left-1; i<right; i++){
        ans += sumArr[i];
    }
    return ans % MOD;
};