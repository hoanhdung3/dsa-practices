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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0, curr = root, stack = [];
    while(curr || (stack.length > 0)){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        count += 1;
        if(count === k){
            return curr.val;
        }
        curr = curr.right
    }
    return -1;
};