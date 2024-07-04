/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = [26];
    let maxCnt = 0, l = 0, res = 0;
    for(let r=0; r<s.length; r++){
        map[s[r]] = (map[s[r]] || 0) + 1;
        maxCnt = Math.max(maxCnt, map[s[r]]);

        if((r - l + 1 - maxCnt) > k){
            map[s[l]] -= 1;
            l++;
        }

        res = Math.max(res, r - l + 1);
    }
    return res;
};
