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
var diameterOfBinaryTree = function(root) {
    let res = 0;

    const diameter = (node) => {
        // Base case
        if(!node) return 0;

        // Recursively calculate the diameter of left and right subtrees
        const left = diameter(node.left, res);
        const right = diameter(node.right, res);

        // Update the maximum diameter encountered so far
        res = Math.max(res, left + right);

        // Depth of current node
        return Math.max(left, right) + 1;
    }

    diameter(root);

    return res;
};