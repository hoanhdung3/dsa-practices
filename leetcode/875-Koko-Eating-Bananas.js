/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1, right = Math.max(...piles);
    let result = right
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        let hours = 0;
        for(let p of piles){
            hours += Math.ceil(p / mid);
        }
        if(hours <= h){
            result = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return result;
};