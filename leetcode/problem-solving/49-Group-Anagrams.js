/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length < 2){
        return [strs];
    }

    const mapObj = {};
    const result = [];

    strs.forEach(str => {
        let sortedStr = str.split("").sort().join("");
        if(mapObj[sortedStr] === undefined){
            mapObj[sortedStr] = [str];
        }else{
            mapObj[sortedStr].push(str);
        }
    });

    Object.keys(mapObj).forEach((key) => {
        result.push(mapObj[key])
    });

    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));