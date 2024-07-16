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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const lca = findLCA(root, startValue, destValue);

    const lcaToStart = [];
    findPath(lca, startValue, lcaToStart);
    const lcaToDest = [];
    findPath(lca, destValue, lcaToDest);

    const res = [];
    for(let i=0; i<lcaToStart.length; i++){
        res.push('U');
    }

    for(const step of lcaToDest){
        res.push(step)
    }
    
    return res.join("");
}

function findLCA(node, p, q){
    // find the Lowest Common Ancestor
    if(!node) return null;
    if(node.val === p || node.val === q) return node;
    const left = findLCA(node.left, p, q);
    const right = findLCA(node.right, p, q);
    if(left && right) return node;
    if(!left) return right;
    if(!right) return left;
    return null
}

function findPath(startNode, endVal, paths){
    if(!startNode) return false;
    if(startNode.val === endVal) return true;

    paths.push('L');
    if(startNode.left && findPath(startNode.left, endVal, paths)) return true;
    paths.pop();

    paths.push('R');
    if(startNode.right && findPath(startNode.right, endVal, paths)) return true;
    paths.pop();

    return false;
}

