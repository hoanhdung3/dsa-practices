/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length, col = matrix[0].length - 1, i = 0;
    while(i<row && col>-1){
        if(matrix[i][col] === target){
            return true;
        }else if(matrix[i][col] > target){
            col--;
        }else{
            i++;
        }
    }
    return false;

};