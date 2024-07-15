/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let childrenSet = new Set();
    let childrenMap = new Map();

    for(let [parent, child, isLeft] of descriptions){
        if(!childrenMap.has(parent)){
            childrenMap.set(parent, [-1, -1]);
        }

        childrenSet.add(child);

        if(isLeft === 1){
            childrenMap.get(parent)[0] = child;
        }else{
            childrenMap.get(parent)[1] = child;
        }
    }

    let headNodeVal; // find the root val because the root val cannot exist as child
    for(let parent of childrenMap.keys()){
        if(!childrenSet.has(parent)){
            headNodeVal = parent;
            break;
        }
    }

    return constructTree(headNodeVal, childrenMap);
};

function constructTree(curNodeVal, childrenMap){
    let newNode = new TreeNode(curNodeVal);
    if(childrenMap.has(curNodeVal)){
        let [left, right] = childrenMap.get(curNodeVal);
        if(left !== -1){
            newNode.left = constructTree(left, childrenMap);
        }
        if(right !== -1){
            newNode.right = constructTree(right, childrenMap);
        }
    }
    return newNode;
}