/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const dfs = (node) => {
        if(!node) return;
        for(const child of node.children){
            dfs(child);
        }
        res.push(node.val);
    }
    let res = [];
    dfs(root);
    return res;
};