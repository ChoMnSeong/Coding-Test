function solution(land) {
//     let max = 0;

//     const fun = (sum, row, prevCol) => {
//         if (row === land.length) {
//             max = Math.max(max, sum);
//             return;
//         }
//         for (let col = 0; col < land[0].length; col++) {
//             if (col !== prevCol) {
//                 fun(sum + land[row][col], row + 1, col);
//             }
//         }
//     };

//     fun(0, 0, -1);
//     return max;
    
    for(let col = 1; col < land.length; col++){
        land[col][0] += Math.max(land[col-1][1], land[col-1][2], land[col-1][3])
        land[col][1] += Math.max(land[col-1][0], land[col-1][2], land[col-1][3])
        land[col][2] += Math.max(land[col-1][0], land[col-1][1], land[col-1][3])
        land[col][3] += Math.max(land[col-1][0], land[col-1][1], land[col-1][2])
    }
    
    
    return Math.max(...land[land.length - 1])
}
