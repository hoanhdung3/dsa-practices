/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    let memo = {};
    const go = (idx) => {
        if(idx === books.length) return 0;
        if(memo[idx]) return memo[idx];
        let cur = shelfWidth, maxHeight = 0;
        memo[idx] = Infinity;
        for(let i=idx; i<books.length; i++){
            let [w, h] = books[i];
            if(cur < w) break;
            cur -= w;
            maxHeight = Math.max(maxHeight, h);
            memo[idx] = Math.min(memo[idx], go(i + 1) + maxHeight);
        }
        return memo[idx];
    };
    return go(0);
};