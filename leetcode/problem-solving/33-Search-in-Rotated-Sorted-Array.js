/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(target === nums[mid]){
            return mid;
        }

        // left sorted portion
        if(nums[mid] >= nums[left]){
            if(nums[mid] > target && nums[left] <= target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{ // right sorted portion
            if(nums[mid] < target && nums[right] >= target){
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
    }
    return -1;
};