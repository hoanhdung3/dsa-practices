/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;
    while(Math.floor(numBottles / numExchange) !== 0){
        let div = Math.floor(numBottles / numExchange);
        let mod = numBottles % numExchange;
        res += div
        numBottles = div + mod;
    }
    return res;
};

var numWaterBottles1 = function(numBottles, numExchange) {
    let res = numBottles;
    let emptyBottles = numBottles;
    while(emptyBottles >= numExchange){
        let div = Math.floor(emptyBottles / numExchange);
        res += div;
        let mod = emptyBottles % numExchange;
        emptyBottles = div + mod;
    }
    return res;
};