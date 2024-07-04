/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0, l = 0;
    let charSet = new Set();
    for(let r=0; r<s.length; r++){
        while(charSet.has(s[r])){
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        result = Math.max(result, charSet.size);
    }
    return result;
};