/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    // O(n^2)
    let circle = [];
    for(let i=1; i<=n; i++){
        circle.push(i);
    }

    let currIndex = 0

    while(circle.length > 1){
        let nextToRemove = (currIndex + k - 1) % circle.length;
        circle.splice(nextToRemove, 1);
        currIndex = nextToRemove;
    }

    return circle[0];
};