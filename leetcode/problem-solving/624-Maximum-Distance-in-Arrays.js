/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let max = arrays[0][arrays[0].length - 1];
    let min = arrays[0][0];
    let ans = 0;

    for(let i=1; i<arrays.length; i++){
        let tmpMin = arrays[i][0];
        let tmpMax = arrays[i][arrays[i].length - 1];

        ans = Math.max(ans, Math.abs(tmpMax - min), Math.abs(max - tmpMin));

        min = Math.min(min, tmpMin);
        max = Math.max(max, tmpMax);
    }

    return ans;
};