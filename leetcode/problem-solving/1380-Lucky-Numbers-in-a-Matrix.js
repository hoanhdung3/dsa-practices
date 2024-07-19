/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    const rows_min = new Set();
    for(let r=0; r<ROWS; r++){
        let tmpMin = Number.MAX_SAFE_INTEGER;
        for(let c=0; c<COLS; c++){
            tmpMin = Math.min(tmpMin, matrix[r][c]);
        }
        rows_min.add(tmpMin);
    }

    const ans = [];

    for(let c=0; c<COLS; c++){
        let tmpMax = Number.MIN_SAFE_INTEGER;
        for(let r=0; r<ROWS; r++){
            tmpMax = Math.max(tmpMax, matrix[r][c]);    
        }   
        if(rows_min.has(tmpMax)) ans.push(tmpMax);
    }

    return ans;
};