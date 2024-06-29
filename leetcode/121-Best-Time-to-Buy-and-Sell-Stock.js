/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0], result = 0;
    for(let i=1; i<prices.length; i++){
        minPrice = Math.min(minPrice, prices[i]);
        result = Math.max(result, prices[i] - minPrice);
    }
    return result;
};