/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    /*
        check the maximum points of the greater first
    */
    const calculate = (pair, point) => {
        let total = 0;
        let stack = [];

        for(const c of arr){
            if((c === pair[1]) && (stack.length > 0) && (stack[stack.length - 1] === pair[0])){
                stack.pop();
                total += point;
            }else{
                stack.push(c);
            }
        }

        arr = stack;
        return total;
    }

    let arr = s.split("");
    let res = 0;
    let pair = (x > y) ? ['ab', 'ba'] : ['ba','ab'];

    res += calculate(pair[0], Math.max(x, y));
    res += calculate(pair[1], Math.min(x, y));

    return res;
};