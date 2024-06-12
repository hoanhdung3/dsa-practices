/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let onlyAlphabetStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let headPointer = 0;
    let tailPointer = onlyAlphabetStr.length - 1;

    for(let i=0; i<(onlyAlphabetStr.length / 2); i++){
        if(onlyAlphabetStr[headPointer] !== onlyAlphabetStr[tailPointer]){
            return false;
        }
        headPointer++;
        tailPointer--;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));