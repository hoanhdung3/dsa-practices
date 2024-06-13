/**
 * @param {number[]} height
 * @return {number}
 */

// Brute Force Solution
var maxArea2 = function(height) {
    let result = 0;
    for(let i=0; i<(height.length - 1); i++){
        for(let j=i+1; j<height.length; j++){
            let tempArea = Math.min(height[i], height[j]) * (j - i);
            result = Math.max(tempArea, result);
        }
    }
    return result;
};

var maxArea = function(height) {
    let result = 0;
    let low = 0;
    let high = height.length - 1;
    while (low < high){
        let tempArea = (high - low) * Math.min(height[low], height[high]);
        result = Math.max(result, tempArea);

        if(height[low] >= height[high]){
            high--;
        }else{
            low++;
        }
    }
    return result;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));