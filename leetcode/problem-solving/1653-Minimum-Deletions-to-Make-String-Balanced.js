/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const dp = new Array(s.length + 1).fill(0);
    let bCount = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === 'b'){
            dp[i+1] = dp[i];
            bCount++;
        }else{
            dp[i+1] = Math.min(dp[i] + 1, bCount);
        }
    }

    return dp[s.length];
};

var minimumDeletions = function(s) {
    let res = 0;
    let bCount = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === 'b'){
            bCount++;
        }else{
            res = Math.min(res + 1, bCount);
        }
    }

    return res;
};