/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = 0;

    for(let log of logs){
        if(log[0] === '.'){
            if(log[1] === '.'){
                res = (res === 0) ? res : res - 1;
            }
        }else{
            res++;
        }
    }

    return res;
};


var minOperations = function(logs) {
    let res = 0;

    for(let log of logs){
        if(log === '../'){
            res = (res === 0) ? res : res - 1;
        }else if(log !== './'){
            res++;
        }
    }

    return res;
};