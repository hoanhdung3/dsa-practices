/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const count = {};
    for(const c of word){
        count[c] = (count[c] || 0) + 1;
    }

    const sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1]);
    const keyCount = Array(8).fill(0);

    let cost = 0;
    let i=0;
    for(const [k, c] of sortedCount){
        i = i % 8;
        cost += ++keyCount[i++] * c;
    }

    return cost;
};