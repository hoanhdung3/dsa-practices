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
 * @return {number}
 */
var goodNodes = function(root) {
    let result = 0;

    var countGoodNodes = function(node, currMax){
        if(!node) return;
        if(node.val >= currMax){
            result +=1;
        } 
        currMax = Math.max(currMax, node.val);
        countGoodNodes(node.left, currMax);
        countGoodNodes(node.right, currMax);
    }

    countGoodNodes(root, root.val);
    return result;
};