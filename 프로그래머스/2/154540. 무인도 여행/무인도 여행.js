function solution(maps) {
    const countArr = [];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const arr = maps.map(m => m.split(''));
    const n = arr.length;
    const m = arr[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false));

    function dfs(x, y) {
        let count = Number(arr[x][y]);
        visited[x][y] = true;    
        for (let [dX, dY] of dx.map((d, i) => [d, dy[i]])) {
            const nx = x + dX;
            const ny = y + dY;    
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny] && arr[nx][ny] !== 'X') {
                count += dfs(nx, ny);
            }
        }
        return count;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && arr[i][j] !== 'X') {
                const countDay = dfs(i, j);
                countArr.push(countDay);
            }
        }
    }

    return countArr.length !== 0 ? countArr.sort((a, b) => a - b) : [-1];
}
