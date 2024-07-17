/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const delete_set = new Set(to_delete); // Using Set here because need to check for every node if the Node value is in to delete. Array would be O(n) and total is O(n*m) n - number of nodes and m - number of nodes to delete. Set would be O(1)
    const ans = [];
    const dfs = (node) => {
        if(!node) return null;

        node.left = dfs(node.left);
        node.right = dfs(node.right);

        if(!delete_set.has(node.val)) return node;
        if(node.left) ans.push(node.left);
        if(node.right) ans.push(node.right);
        return null;
    }
    const rootNode = dfs(root);
    if(rootNode) ans.push(rootNode);
    return ans;
};