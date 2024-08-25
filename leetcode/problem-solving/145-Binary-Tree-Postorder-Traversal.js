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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr = [];

    const postOrder = (root, arr) => {
        if(!root) return arr;
        postOrder(root.left, arr);
        postOrder(root.right, arr);
        arr.push(root.val);
    }

    postOrder(root, arr);
    return arr;
};