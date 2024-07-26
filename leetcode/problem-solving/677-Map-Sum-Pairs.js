
var MapSum = function() {
    this.children = {};
    this.val = null;
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let node = this;
    for(let c of key){
        if(!node.children[c]){
            node.children[c] = new MapSum();
        }
        node = node.children[c];
    }
    node.val = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    let node = this;

    // check if nodes have a value, and then checks all children
    const dfs = (node) => {
        if(node.val){
            sum += node.val;
        }
        for(let childKey in node.children){
            dfs(node.children[childKey]);
        }
    }

    // go down tree until last char of prefix
    for(let c of prefix){
        if(!node.children[c]) return 0;
        node = node.children[c];
    }

    if(node.val) sum += node.val // last letter in prefix

    // explore all children of last char in prefix
    for(let childKey in node.children){
        dfs(node.children[childKey]);
    }
    return sum;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */