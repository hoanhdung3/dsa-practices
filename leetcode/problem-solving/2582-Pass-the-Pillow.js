/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let chunks = Math.floor(time / (n - 1));
    let mod = time % (n - 1);
    if(chunks % 2 === 0){
        return mod + 1;
    }else{
        return n - mod;
    }
};