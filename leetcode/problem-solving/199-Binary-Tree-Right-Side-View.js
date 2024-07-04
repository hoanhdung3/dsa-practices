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
var rightSideView = function(root) {
    // DFS
    let result = [];
    
    var takeRight = function(node, h){
        if(!node) return;
        result[h] = node.val;
        // the node.right value will overwrite the node.left value in result array
        takeRight(node.left, h+1);
        takeRight(node.right, h+1);
    }
    takeRight(root, 0);
    return result
};


var rightSideView = function(root) {
    // BFS
    let result = [];
    let queue = [root];

    while(queue.length > 0){
        let rightMost = null;
        let qLen = queue.length;
        for(let i=0; i<qLen; i++){
            let node = queue.shift();
            if(node){
                rightMost = node;
                if(node.left != null) queue.push(node.left);
                if(node.right != null) queue.push(node.right);
            }
        }
        if(rightMost){
            result.push(rightMost.val);
        }
    }
    return result
};
