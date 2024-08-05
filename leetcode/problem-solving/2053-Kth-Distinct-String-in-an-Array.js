/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj = {};
    for(const el of arr)  {
        obj[el] = (obj[el] || 0) + 1;
    }
    
    let cnt = 0;
    for(const [key, val] of Object.entries(obj)){
        if(val === 1){
            cnt++;
        }
        if(cnt === k){
            return key;
        }
    }
    return '';
};