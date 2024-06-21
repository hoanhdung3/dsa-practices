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
 * @return {boolean}
 */

var isBalanced = function(root) {

    let isBal = true;

    var height = function(node){
        if(!node) return 0;

        const left = height(node.left);
        const right = height(node.right);

        if(Math.abs(left - right) > 1){
            isBal = false;
        };

        return Math.max(left, right) + 1;
    }

    height(root);

    return isBal;
};