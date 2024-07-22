/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let ans = [];
    for(let i=0; i<names.length; i++){
        ans.push([names[i], heights[i]]);
    }
    ans.sort((a, b) => b[1] - a[1]);
    return ans.map(items => items[0]);
};

var sortPeople2 = function(names, heights) {
    let obj = {};
    for(let i=0; i<names.length; i++){
        obj[heights[i]] = names[i]; // obj auto-sorting the keys
    }
    let ans = [];
    let objKeys = Object.keys(obj);
    console.log(objKeys);
    for(let i=objKeys.length-1; i>=0; i--){
        ans.push(obj[objKeys[i]]);
    }
    return ans;
};

var sortPeople3 = function(names, heights) {
    const map = {};

    for(let i=0; i<names.length; i++){
        map[heights[i]] = names[i];
    }

    heights.sort((a, b) => b - a);

    const ans = [];
    for(let i=0; i<names.length; i++){
        ans.push(map[heights[i]]);
    }

    return ans;
};