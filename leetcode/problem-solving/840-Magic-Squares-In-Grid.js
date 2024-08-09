/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    if (ROWS < 3 || COLS < 3) return 0;

    const check = (r, c) => {
        const nums = new Set();
        const rowSum = Array(3).fill(0);
        const colSum = Array(3).fill(0);
        let [dSum, rSum] = [0, 0];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const nr = r + i;
                const nc = c + j;
                if (grid[nr][nc] < 1 || grid[nr][nc] > 9) return false;
                rowSum[i] += grid[nr][nc];
                colSum[j] += grid[nr][nc];
                nums.add(grid[nr][nc]);
            }
            dSum += grid[r + i][c + i];
            rSum += grid[r + i][c + 2 - i];
        }

        for (let i = 1; i < 3; i++) {
            if (rowSum[i] != rowSum[i-1] || colSum[i] != colSum[i-1]) return false;
        }

        if (nums.size !== 9 || dSum != rSum) return false;
        return true;
    }

    let ans = 0;
    for (let r = 0; r < ROWS - 2; r++) {
        for (let c = 0; c < COLS - 2; c++) {
            if (check(r, c)) ans++;
        }
    }
    return ans;
};