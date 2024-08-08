/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const DOWN = 1;
    const UP = 3;
    const inBounds = (r, c) => {
        return (r >= 0 && r < rows && c >= 0 && c < cols);
    }
    const total = rows * cols;
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right -> Down -> Left -> Up
    let r = rStart;
    let c = cStart;
    let ans = [[r, c]];
    let moves = 1;
    while(ans.length < total){
        for(let dir=0; dir<dirs.length; dir++){
            const [dx, dy] = dirs[dir];
            for(let i=0; i<moves; i++){
                r += dx;
                c += dy;
                if(inBounds(r, c)) ans.push([r, c]);
                if(ans.length === total) return ans;
            }
            // Increase steops every Down and Up
            if(dir === DOWN || dir === UP) moves++;
        }
    }
    return ans;
};