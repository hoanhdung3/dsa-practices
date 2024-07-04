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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    const dfs = (node, nums) => {
        if(!node) return null;
        // run left first to get the minimum value into nums
        dfs(node.left, nums);
        nums.push(node.val);
        dfs(node.right, nums);
    }

    const createBalance = (l, r) => {
        // l and r are index of nums
        if(l > r) return null;
        let mid = l + Math.floor((r - l) / 2);
        let newNode = new TreeNode(nums[mid]);
        newNode.left = createBalance(l, mid - 1);
        newNode.right = createBalance(mid + 1, r);

        return newNode;
    }

    const nums = []; // inorder array
    dfs(root, nums);
    return createBalance(0, nums.length - 1);
};