/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = Array(nums.length).fill(0);
    let prefix = postfix = 1;
    for(let i=0; i<nums.length; i++){
      answer[i] = prefix;
      prefix *= nums[i];
    }
    for(let i=nums.length - 1; i>=0; i--){
      answer[i] *= postfix;
      postfix *= nums[i];
    }
    return answer;
  };