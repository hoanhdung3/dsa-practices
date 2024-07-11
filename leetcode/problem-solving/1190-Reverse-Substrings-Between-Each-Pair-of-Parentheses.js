/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];

    for(let c of s){
        if(c === ')'){
            let rev = [];
            while(stack.length > 0 && stack[stack.length - 1] !== '('){
                rev.push(stack.pop());
            }
            stack.pop(); // remove the '('
            for(let ch of rev){
                stack.push(ch);
            }
        }else{
            stack.push(c);
        }
    }
    return stack.join('');
};