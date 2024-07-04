/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [], map = new Map();

    for(let n of nums1){
        map.set(n, (map.get(n) || 0) + 1);
    }
    for(let n of nums2){
        if(map.get(n)){
            res.push(n);
            map.set(n, map.get(n) -1);
        }
    }

    return res;
};