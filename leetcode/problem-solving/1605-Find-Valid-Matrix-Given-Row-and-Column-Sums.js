/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const ans = Array(rowSum.length).fill(0).map(() => Array(colSum.length).fill(0));

    for(let r=0; r<rowSum.length; r++){
        ans[r][0] = rowSum[r];
    }

    for(let c=0; c<colSum.length; c++){
        let curColSum = 0;
        for(let r=0; r<rowSum.length; r++){
            curColSum += ans[r][c];
        }

        let row = 0;
        while(curColSum > colSum[c]){
            const diff = curColSum - colSum[c];
            const maxShift = Math.min(diff, ans[row][c]);
            ans[row][c] -= maxShift;
            ans[row][c + 1] += maxShift;
            curColSum -= maxShift;
            row++;
        }
    }

    return ans;
};


var restoreMatrix2 = function(rowSum, colSum) {
    const ans = Array(rowSum.length).fill(0).map(() => Array(colSum.length).fill(0));

    for(let r=0; r<rowSum.length; r++){
        for(let c=0; c<colSum.length; c++){
            const k = Math.min(rowSum[r], colSum[c]);
            rowSum[r] -= k;
            colSum[c] -= k;
            ans[r][c] = k;
        }
    }

    return ans;
};