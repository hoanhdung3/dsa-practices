/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let ans = 0;
    for(const d of details){
        const age = parseInt(d.substr(11, 2));
        if(age > 60) ans++;
    }

    return ans;
};

var countSeniors = function(details) {
    return details.filter(item => Number(item.substring(11, 13)) > 60).length;
};