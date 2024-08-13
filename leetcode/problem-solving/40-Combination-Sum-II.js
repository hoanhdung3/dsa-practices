/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let backtrack = (curIndex, curSum, nums) => {
        if(curSum > target) return;
        if(curSum === target){
            res.push([...nums]);
            return;
        }

        for(let i = curIndex; i < candidates.length; i++){
            if(i > curIndex && candidates[i] === candidates[i - 1]) continue;
            nums.push(candidates[i]);
            backtrack(i + 1, curSum + candidates[i], nums);
            nums.pop();
        }
    }

    let res = [];
    backtrack(0, 0, []);
    return res;
};